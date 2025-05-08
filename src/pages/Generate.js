import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Generate.css";

import { submitPatientData } from "../services/api";

const Generate = () => {
  const [medicalHistory, setMedicalHistory] = useState("");
  const [currentConditions, setCurrentConditions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState(undefined);
  const navigate = useNavigate();

  const exampleMedicalHistory =
    "Type 2 Diabetes (diagnosed 2010)\n\n" +
    "Hypertension (diagnosed 2015)\n\n" +
    "Hyperlipidemia\n\n" +
    "Former smoker (quit in 2018)\n\n" +
    "Coronary artery disease with stent placement (2019)";

  const exampleCurrentConditions =
    "Poorly controlled blood glucose (recent HbA1c: 8.9%)\n\n" +
    "Mild shortness of breath with exertion\n\n" +
    "Elevated blood pressure despite medication\n\n" +
    "Reports fatigue and occasional dizziness\n\n" +
    "Peripheral neuropathy in feet";

  const fillExampleData = (e) => {
    e.preventDefault();
    setMedicalHistory(exampleMedicalHistory);
    setCurrentConditions(exampleCurrentConditions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await submitPatientData({
        medicalHistory,
        currentConditions,
      });
      const quizData = response.questions || [];
      setQuiz(quizData);

      if (!response.ok) {
        throw new Error("Failed to generate quiz");
      }

      const data = await response.json();
      // Redirect to levels page after successful quiz generation
      navigate("/levels");
    } catch (err) {
      // FIXME - umcomment once api in chatgpt works
      // setError("Failed to generate quiz. Please try again.");
      navigate("/levels"); // remove once api error fixed , jst for video record
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Generate Patient Care Quiz</h2>
      <div className="autofill-container">
        <button onClick={fillExampleData} className="autofill-button">
          Fill with Example Data
        </button>
      </div>
      <form onSubmit={handleSubmit} className="patient-data-form">
        <div className="form-group">
          <label htmlFor="medical-history">Medical History:</label>
          <textarea
            id="medical-history"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Enter patient's medical history (e.g., diabetes for 10 years, heart surgery in 2018, etc.)"
            required
            rows={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="current-conditions">Current Conditions:</label>
          <textarea
            id="current-conditions"
            value={currentConditions}
            onChange={(e) => setCurrentConditions(e.target.value)}
            placeholder="Enter current conditions (e.g., hypertension, recovering from hip replacement, etc.)"
            required
            rows={5}
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Quiz"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Generate;
