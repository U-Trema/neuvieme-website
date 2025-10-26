import React from "react";

export const GradientText = ({children}: {children: any}) => {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: 'linear-gradient(to right, #FFB400 0%, #F29200 20%, #EA5B0C 40%, #E30A12 60%, #961B81 80%, #7444C3 100%)'
      }}
    >
      {children}
    </span>
  );
}
