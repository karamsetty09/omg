const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {id: "my-brand"}, "Adopt Me !")
    );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));