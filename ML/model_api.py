from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)  # Allow CORS for all origins

# Load model
model_10 = pickle.load(open("model_10.pkl", "rb"))
model_science = pickle.load(open("model_Science.pkl", "rb"))
model_commerce = pickle.load(open("model_Commerce.pkl", "rb"))
model_arts = pickle.load(open("model_Arts.pkl", "rb"))

@app.route("/predict-10", methods=["POST"])
def predict_class10():
    data = request.json
    try:
        features = [(data[field]) for field in ["IQ", "Bengali", "English", "Math", "Biology", "Physical_Science", "History", "Geography"]]
        prediction = model_10.predict([features])[0]
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/predict-science", methods=["POST"])
def predict_science():
    data = request.json
    try:
        features = [(data[field]) for field in [
            "IQ", "ENGLISH", "MATH", "PHYSICS", "CHEMISTRY", "BIOLOGY", "COMPUTER SCIENCE"
        ]]
        prediction = model_science.predict([features])[0]
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/predict-commerce", methods=["POST"])
def predict_commerce():
    data = request.json
    try:
        features = [(data[field]) for field in [
            "IQ", "ENGLISH", "MATH", "ACCOUNTANCY", "ECONOMICS", "BUISNESS STUDIES", "COMPUTER APPLICATION"
        ]]
        prediction = model_commerce.predict([features])[0]
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
@app.route("/predict-arts", methods=["POST"])
def predict_arts():
    data = request.json
    try:
        features = [(data[field]) for field in [
            "IQ","Bengali","English","History","Political Science","Education","Sociology","Geography"
        ]]
        prediction = model_arts.predict([features])[0]
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)
