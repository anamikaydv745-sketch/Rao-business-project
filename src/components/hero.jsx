import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1645897938830-26ac2f44c70c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-snug">
          <Typewriter
            words={["Enjoy the silence in our reading room."]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={30}
          />
        </h1>

       
      </div>
    </div>
  );
};

export default Hero;
