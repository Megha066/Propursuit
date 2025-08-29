import React from "react";
import chatbot1 from "../assets/chatbot1.png"

function DetailsSection({ id, image, title, content, reverse }) {
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row items-center justify-between my-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-[50%] m-10 p-4">
        <img src={image} alt={title} className="rounded-2xl shadow-lg" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default DetailsSection;
