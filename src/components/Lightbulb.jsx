import { useState } from "react";

// export const Lightbulb = () => {
//   // Initialize the state for on/off
//   const [lightOn, setLightOn] = useState(false);
//   const [classSwitch, setClassSwitch] = useState("off");

//   const toggleLight = () => {
//     // Toggle the on/off state
//     if (lightOn === true) {
//       setClassSwitch("on");
//     } else {
//       setClassSwitch("off");
//     }

//     setLightOn(!lightOn);

//     console.log(lightOn);
//     console.log(classSwitch);
//   };
//   return (
//     <div className="lightbulb-container">
//       <div className={`lightbulb ${classSwitch}`} onClick={toggleLight}>
//         <div className="bulb"></div>
//       </div>

//       <div className={`lightbulb ${classSwitch}`} onClick={toggleLight}>
//         <div className="bulb"></div>
//       </div>
//     </div>
//   );
// };

    //  Solution 1

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [lightOn, setLightOn] = useState(false);
  const toggleLight = () => {
    // Toggle the on/off state
    setLightOn(!lightOn);

    console.log(lightOn);
    console.log("Clicked");
  };
  return (
    <div className="lightbulb-container">
      <div
        className={`lightbulb ${lightOn ? "on" : "off"}`}
        onClick={toggleLight}
      >
        <div className="bulb"></div>
      </div>

      <div
        className={`lightbulb ${!lightOn ? "on" : "off"}`}
        onClick={toggleLight}
      >
        <div className="bulb"></div>
      </div>
    </div>
  );
};

//      Solution 2

// export const Lightbulb = () => {
//   // Initialize the state for on/off
//   const [lightOn, setLightOn] = useState(false);
//   const [classSwitch, setClassSwitch] = useState("off");

//   const toggleLight = () => {
//     // Toggle the on/off state
//     if (lightOn === true) {
//       setClassSwitch("on");
//     } else {
//       setClassSwitch("off");
//     }

//     setLightOn(!lightOn);

//     console.log(lightOn);
//     console.log(classSwitch);
//   };
//   return (
//     <div className="lightbulb-container">
//       <div className={`lightbulb ${classSwitch}`} onClick={toggleLight}>
//         <div className="bulb"></div>
//       </div>
//     </div>
//   );
// };
