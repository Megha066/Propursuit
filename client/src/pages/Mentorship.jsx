import React, { useEffect } from 'react';
import Predictor from '../components/Predictor';

function Mentorship() {

  return (
    
    <div className="p-6 flex flex-col items-center my-10  max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mentorship Page</h1>
      <p>Welcome to the mentorship section. Connect with your guide or chatbot below.</p>

      {/* 🧠 ML Career Predictor Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-center">Career Stream Predictor</h2>
        <Predictor />
      </div>
    </div>
  );
}

export default Mentorship;
