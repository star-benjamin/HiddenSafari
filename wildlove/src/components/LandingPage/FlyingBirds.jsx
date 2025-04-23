
import React from "react";
//import bird from "../../assets/bird.png";

const FlyingBirds = () => {
  const birds = Array.from({ length: 5 });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {birds.map((_, i) => {
        const delay = Math.random() * 5;
        const top = Math.random() * 80;

        return (
          <img
            key={i}
            src={bird}
            className="absolute w-10 flying-bird"
            style={{
              top: `${top}%`,
              left: `-10%`,
              animationDelay: `${delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
            alt="Flying Bird"
          />
        );
      })}
    </div>
  );
};

export default FlyingBirds;
