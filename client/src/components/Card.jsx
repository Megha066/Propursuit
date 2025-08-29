import React, { useEffect, useRef, useState } from 'react'

function Card({ bgColor, image, description, title, bgColor2, onClick, targetId }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // triggers when 20% of card is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleScroll = () => {
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`w-80 p-3 m-5 border-2 rounded-lg shadows-into-light-regular cursor-pointer transform transition-all duration-500 ease-in-out fade-in ${
        isVisible ? "show" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt={title}
        className="mx-5 w-[60%] rounded-md"
        onClick={onClick}
      />
      <h2
        className="text-center m-3 hover:scale-105"
        onClick={onClick}
      >
        {title}
      </h2>
      <p className='text-sm'>{description}</p>
      <p className="text-xs text-center m-2">
        <button
          className={`${bgColor2} p-2 rounded-full border hover:scale-105 cursor-pointer`}
          onClick={handleScroll}
        >
          Read More
        </button>
      </p>
    </div>
  );
}

export default Card;
