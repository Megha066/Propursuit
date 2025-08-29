// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// function WhyChooseUs() {
//   const reasons = [
//     {
//       title: "Personalized Guidance",
//       description: "We analyze your strengths, interests, and goals to suggest the best career path tailored to you.",
//       icon: <CheckCircle className="w-10 h-10 text-blue-500" />
//     },
//     {
//       title: "Expert Mentorship",
//       description: "Connect with experienced mentors who guide you step by step in your career journey.",
//       icon: <CheckCircle className="w-10 h-10 text-green-500" />
//     },
//     {
//       title: "Streamlined Process",
//       description: "Our AI-driven system makes stream and career selection quick, simple, and stress-free.",
//       icon: <CheckCircle className="w-10 h-10 text-purple-500" />
//     },
//     {
//       title: "Progress Tracking",
//       description: "Regular tests and assessments help you track improvement and stay on the right path.",
//       icon: <CheckCircle className="w-10 h-10 text-pink-500" />
//     }
//   ];

//   return (
//     <section id="whyChooseUs" className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12">
//           Why Choose <span className="text-blue-600">Our Guidance?</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, y: 0, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               <div className="flex justify-center mb-4">{reason.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
//               <p className="text-gray-600">{reason.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;

// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// ✅ Reusable Card component
function WhyCard({ title, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <CheckCircle className={`w-10 h-10 ${color}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

// ✅ Section Component
function WhyChooseUs({ cards }) {
  return (
    <section id="whyChooseUs" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-blue-600">Our Guidance?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <WhyCard
              key={index}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
