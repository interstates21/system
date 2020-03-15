import React, { useRef, useEffect } from 'react';
import AvatarGenerator from 'react-avatar-generator';

const CustomAvatarGenerator = () => {
  const ref = useRef(null);

  const randomize = () => {
    if (!ref) {
      return;
    }
    ref.current.randomize();
  };

  useEffect(() => {
    const interval = setInterval(randomize, 2000);

    return () => clearInterval(interval);
  }, [ref]);
  return (
    <div className="simple-block">
      <AvatarGenerator
        ref={ref}
        colors={['aliceblue', 'yellow', '#617CE3']}
        backgroundColor="#fff"
      />
    </div>
  );
};

export default CustomAvatarGenerator;
