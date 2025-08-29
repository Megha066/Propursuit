import { useState } from "react";
import axios from "axios";

function PredictForm() {
  const [cls, setCls] = useState("10");
  const [stream, setStream] = useState("None");
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");

  // Correct field names that match backend .py files
  const getFields = () => {
    if (cls === "10") {
      return ["IQ", "Bengali", "English", "Math", "Biology", "Physical_Science", "History", "Geography"];
    } else if (stream === "Science") {
      return ["IQ", "ENGLISH", "MATH", "PHYSICS", "CHEMISTRY", "BIOLOGY", "COMPUTER SCIENCE"];
    } else if (stream === "Commerce") {
      return ["IQ", "ENGLISH", "MATH", "ACCOUNTANCY", "ECONOMICS", "BUISNESS STUDIES", "COMPUTER APPLICATION"];
    } else if (stream === "Arts") {
      return ["IQ","Bengali", "English", "History", "Political Science", "Education", "Sociology", "Geography"];
    }
    return [];
  };

  const getEndpoint = () => {
    if (cls === "10") return "predict-10";
    if (stream === "Science") return "predict-science";
    if (stream === "Commerce") return "predict-commerce";
    if (stream === "Arts") return "predict-arts";
    // return ""; // Arts not handled in Flask yet
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = getEndpoint();
    if (!endpoint) {
      setResult("Selected stream is not supported yet.");
      return;
    }

    try {
      const res = await axios.post(`http://127.0.0.1:5000/${endpoint}`, formData);
      setResult(res.data.prediction);
    } catch (err) {
      console.log(err.message);
      console.error("Prediction failed:", err.message);
      setResult("Prediction failed");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* <h2 className="text-xl font-semibold mb-4">Stream Prediction</h2> */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={cls} onChange={(e) => {
          setCls(e.target.value);
          setStream("None");
          setFormData({});
          setResult("");
        }} className="p-2 border rounded w-full">
          <option value="10">Class 10</option>
          <option value="12">Class 12</option>
        </select>

        {cls === "12" && (
          <select value={stream} onChange={(e) => {
            setStream(e.target.value);
            setFormData({});
            setResult("");
          }} className="p-2 border rounded w-full">
            <option value="None" disabled>Select Stream</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        )}

        {getFields().map((field) => (
          <input
            key={field}
            type="number"
            min="0" 
            name={field}
            step={field === "IQ" ? "any" : "1"}
            placeholder={`Enter ${field} marks`}
            value={formData[field] || ""}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        ))}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Predict
        </button>
      </form>

      {result && <p className="mt-4 p-2 rounded-lg text-green-600 font-bold text-center bg-blue-200 border border-black">Prediction: {result}</p>}
    </div>
  );
}

export default PredictForm;
