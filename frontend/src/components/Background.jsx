import React, { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default function Background({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE, // explicitly pass THREE
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0077ff, // main wave color
        shininess: 150,
        waveHeight: 20,
        waveSpeed: 1.5,
        zoom: 1.2,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen w-full">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
