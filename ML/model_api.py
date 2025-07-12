from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)  # Allow CORS for all origins

# Load model
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        features = list(map(float, data["data"]))  # Expecting a list of numbers
        prediction = model.predict([np.array(features)])
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
