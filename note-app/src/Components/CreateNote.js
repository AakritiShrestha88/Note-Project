import React from "react";

let colorToDisplay = "";
export function CreateNote(props) {
  if (props.note.color === "Red") {
    colorToDisplay = (
      <div className="Home" style={{ background: "red" }}>
        <p className="Home-description">{props.note.description}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  } else if (props.note.color === "Blue") {
    colorToDisplay = (
      <div className="Home" style={{ background: "blue" }}>
        <p className="Home-description">{props.note.description}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  } else if (props.note.color === "Green") {
    colorToDisplay = (
      <div className="Home" style={{ background: "green" }}>
        <p className="Home-description">{props.note.description}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  } else if (props.note.color === "Yellow") {
    colorToDisplay = (
      <div className="Home" style={{ background: "yellow" }}>
        <p className="Home-description">{props.note.description}</p>
        <div style={{ clear: "both" }} />
      </div>
    );
  }

  return colorToDisplay;
  //   return <div className="feed">{colorToDisplay}</div>;
}

// export function CreateNote(props) {

//     console.log(props);

//     return (
//       <div className="feed">
//         <p style={{ backgroundColor: "red" }}>{props.note.description}</p>
//       </div>
//     );
//   }
