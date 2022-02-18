const pet = () => {
    return React.createElement("div", {},
        [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h1", {}, "Dog"),
        React.createElement("h1", {}, "Havanese"),
        ]
    );
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id: "my-brand"}, "Adopt Me !"),
            ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),
            React.createElement(pet),
            React.createElement(pet),
            React.createElement(pet),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));