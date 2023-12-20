import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import background_anim from '../Background-anim/background.anim';


const P5Wrapper = ({ theme, isAnim }) => {
   

    const sketchRef = useRef();

 
  useEffect(() => {
    const canvas = new p5((p) => {
      background_anim(p, theme, isAnim); // Pass p and theme to the sketch
    }, sketchRef.current);

    return () => {
      canvas.remove();
    };
  }, [theme, isAnim]);

  return <div ref={sketchRef} />;
};

export default P5Wrapper;
