"use strict";

function App() {
  return (
    <div>
      <SimpleComponent name="React" />
      <SimpleComponent name="React 2" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
