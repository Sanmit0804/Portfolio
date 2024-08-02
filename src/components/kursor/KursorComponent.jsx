import React, { useEffect } from 'react';
import 'kursor/dist/kursor.css';
import Kursor from 'kursor';

const KursorComponent = () => {
  useEffect(() => {
    new Kursor({
      type: 1,
      removeDefaultCursor: true,
      color: '#808080',
    });
  }, []);

  return (
    <div id="app">
      <p>hello Kursor.js</p>
    </div>
  );
};

export default KursorComponent;
