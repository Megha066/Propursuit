import express from "express";
import axios from "axios";

const router = express.Router();

// POST /api/predict
router.post("/", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5000/predict", req.body);
    res.json({ prediction: response.data.prediction });
  } catch (error) {
    res.status(500).json({ error: "Prediction failed", details: error.message });
  }
});

export default router;
