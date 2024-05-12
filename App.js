// const h=React.createElement("h1",   // h is javascript element not a tag basically a javascript object
//     {id: "heading"},
//     "Hello world from react"
// );


// how to create this using react:-

// <div id="parent">
//     <div id="child">
//         <h1>im h1 hehe</h1>
//         <h2>im h2 hehehe</h2>
//     </div>
// </div>
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im h1 hehe"),
        React.createElement("h2",{},"im h2 hehehe")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"im h1 hehe"),
        React.createElement("h2",{},"im h2 hehehe")])
    ]
);
// for multiplr object u can use array

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  // render tag is converting that h object into h1 tag