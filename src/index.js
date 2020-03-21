"use strict";

function App() {
  return (
    <div>
      <SimpleComponent name="React" />
      <HeaderComponent text="FCC: Front End Libraries - Project 1, Project Name" />
      <SecondCounter />
      <ToDoList />
      {/* <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList /> */}
      <FooterComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
