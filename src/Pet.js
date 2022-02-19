// Both these two codes are same JSX is good for look and understanding.
// import React from 'react';

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h2", {}, props.name),
//       React.createElement("h3", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

const Pet = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.name}</h3>
            <h3>{props.name}</h3>
        </div>

    );
};

export default Pet;