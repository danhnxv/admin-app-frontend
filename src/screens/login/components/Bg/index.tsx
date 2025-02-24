import Image from 'next/image';
import React from 'react';

const Bg = () => {
  return (
    <div>
      <Image
        src="/assets/components/FormLogin/AuthBg.png"
        alt="Auth"
        layout="fill"
        className="absolute top-0 left-0 -z-20"
      />

      <Image
        src="/assets/components/FormLogin/ButtomAuthBg.png"
        alt="BottomAuthBG"
        layout="fill"
        className="absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default Bg;
