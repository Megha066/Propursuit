import { useState } from "react";
import axios from "axios";

function PredictForm() {
  const [cls, setCls] = useState("10");
  const [stream, setStream] = useState("None");
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");

  const getFields = () => {
    if (cls === "10") {
      return ["IQ", "BENGALI", "ENGLISH", "MATHEMATICS", "BIOLOGY", "PHYSICAL SCIENCE", "HISTORY", "GEOGRAPHY"];
    } else if (stream === "Science") {
      return ["PHYSICS", "CHEMISTRY", "BIOLOGY", "MATHEMATICS", "COMPUTER SCIENCE", "ENGLISH"];
    } else if (stream === "Commerce") {
      return ["ACCOUNTANCY", "BUSINESS STUDIES", "ECONOMICS", "MATHEMATICS", "ENGLISH"];
    } else if (stream === "Arts") {
      return ["HISTORY", "GEOGRAPHY", "POLITICAL SCIENCE", "ECONOMICS", "PSYCHOLOGY", "ENGLISH"];
    }
    return [];
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

    try {
      const fieldNames = getFields();
      const values = fieldNames.map((field, index) => {
        const val = formData[field];
        if (val === "" || val === undefined) throw new Error(`Missing value for ${field}`);

        return field === "IQ" ? parseFloat(val) : parseInt(val);
      });

      const res = await axios.post("http://127.0.0.1:5000/predict", {
        data: values
      });

      setResult(res.data.prediction);
    } catch (err) {
      console.error("Prediction failed:", err.message);
      setResult("Prediction failed");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Stream Prediction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Class Selector */}
        <select value={cls} onChange={(e) => {
          setCls(e.target.value);
          setStream("None");
          setFormData({});
          setResult("");
        }} className="p-2 border rounded w-full">
          <option value="10">Class 10</option>
          <option value="12">Class 12</option>
        </select>

        {/* Stream Selector for Class 12 */}
        {cls === "12" && (
          <select value={stream} onChange={(e) => {
            setStream(e.target.value);
            setFormData({});
            setResult("");
          }} className="p-2 border rounded w-full">
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        )}

        {/* Marks Inputs */}
        {getFields().map((field) => (
          <input
            key={field}
            type="number"
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

      {/* Show prediction */}
      {result && <p className="mt-4 text-green-600 font-semibold">Prediction: {result}</p>}
    </div>
  );
}

export default PredictForm;
