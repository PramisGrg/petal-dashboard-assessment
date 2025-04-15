import React from "react";

export const Button = React.memo(
  ({ handleClick, label }: { handleClick: () => void; label: string }) => {
    console.log(`Rendering button - ${label}`);
    return <button onClick={handleClick}>{label}</button>;
  }
);
