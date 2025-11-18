import React from "react";

const TopEvent = () => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        border: "1px solid #ddd",
        backgroundColor: "pink",
        boxSizing: "border-box",
        textAlign: "center", // center multiline text horizontally
        overflowWrap: "break-word",
      }}
    >
      Driving a commercial vehicle on a highway
    </div>
  );
};

export default TopEvent;
