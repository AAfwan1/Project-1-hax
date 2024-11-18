import React, { useEffect, useRef } from "react";

const SimpleIconWrapper = ({ accentColor, icon, style }) => {
  const iconRef = useRef();

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.accentColor = accentColor;
      iconRef.current.icon = icon;
    }
  }, [accentColor, icon]);

  return (
    <simple-icon
      ref={iconRef}
      style={{
        display: "inline-block",
        fontSize: "40px",
        ...style,
      }}
    />
  );
};

export default SimpleIconWrapper;

