import React from "react";

const Harzard = () => {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "#f3f3f3ff" }}>
      <div
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          border: "1px solid #ddd",
          borderRadius: "50%", // make it a circle
          backgroundColor: "pink",
          boxSizing: "border-box",
          textAlign: "center", // center multiline text horizontally
          overflowWrap: "break-word",
        }}
      >
        Loss of control over the vehicle at 71 mph
      </div>
    </div>
  );
};

export default Harzard;
