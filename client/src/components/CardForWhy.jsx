import React, { useEffect, useRef, useState } from 'react'

function CardForWhy({ bgColor, description, title, bgColor2, targetId  }) {
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
    <div>
      <div ref={ref} className={`w-[90%] p-3 m-5 border-2 rounded-lg shadows-into-light-regular cursor-pointer transform transition-all duration-500 ease-in-out fade-in ${isVisible ? "show" : ""}`} style={{ backgroundColor: bgColor }}>
        <h2 className="text-center text-xl font-bold mt-3 hover:scale-105 mb-5">{title}</h2>
        <p>{description}</p>
        <p className='text-center m-2'>
          <button onClick={handleScroll} className={`${bgColor2} p-2 rounded-full border hover:scale-105 cursor-pointer`}>Read More</button>
        </p>

      </div>
    </div>
  )
}

export default CardForWhy
