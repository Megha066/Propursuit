// import React from 'react'
// import Predictor from '../components/Predictor';

// import { useEffect } from 'react';

// function Mentorship() {
//   useEffect(() => {
//     // Load Botpress inject.js
//     const script1 = document.createElement('script');
//     script1.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
//     script1.defer = true;
//     document.body.appendChild(script1);

//     // Load your Botpress config script
//     const script2 = document.createElement('script');
//     script2.src = 'https://files.bpcontent.cloud/2025/06/24/13/20250624132837-G67CJJND.js';
//     script2.defer = true;
//     document.body.appendChild(script2);

//     // Cleanup on unmount (optional)
//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Mentorship Page</h1>
//       <p>Welcome to the mentorship section. Connect with your guide or chatbot below.</p>
//     </div>
//   );
// }

// export default Mentorship;



import React, { useEffect } from 'react';
import Predictor from '../components/Predictor';

function Mentorship() {
  // useEffect(() => {
  //   // Load Botpress inject.js
  //   const script1 = document.createElement('script');
  //   script1.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
  //   script1.defer = true;
  //   document.body.appendChild(script1);

  //   // Load your Botpress config script
  //   const script2 = document.createElement('script');
  //   script2.src = 'https://files.bpcontent.cloud/2025/06/24/13/20250624132837-G67CJJND.js';
  //   script2.defer = true;
  //   document.body.appendChild(script2);

  //   // Cleanup on unmount
  //   return () => {
  //     document.body.removeChild(script1);
  //     document.body.removeChild(script2);
  //   };
  // }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mentorship Page</h1>
      <p>Welcome to the mentorship section. Connect with your guide or chatbot below.</p>

      {/* 🧠 ML Career Predictor Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Career Stream Predictor</h2>
        <Predictor />
      </div>
    </div>
  );
}

export default Mentorship;
