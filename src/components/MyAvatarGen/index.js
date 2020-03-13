import React, { useRef } from 'react';
import AvatarGenerator from 'react-avatar-generator';

const CustomAvatarGenerator = () => {
  const ref = useRef(null);

  const randomize = () => {
    if (!ref) {
      return;
    }
    ref.current.randomize();
  };

  return (
    <div className="simple-block" onClick={randomize}>
      <AvatarGenerator
        ref={ref}
        colors={['aliceblue', 'yellow', '#617CE3']}
        backgroundColor="#fff"
      />
    </div>
  );
};

export default CustomAvatarGenerator;
