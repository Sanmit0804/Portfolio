import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Tilt = (props) => {
  const { options, children, ...rest } = props;
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }
  }, [options]);

  return (
    <div ref={tiltRef} {...rest}>
      {children}
    </div>
  );
};

export default Tilt;
