'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Renting a car has never been easier — find a great car today!
        </h1>
        <p className="hero__subtitle">
          MonkFish Cars makes renting a car quick and easy!
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
