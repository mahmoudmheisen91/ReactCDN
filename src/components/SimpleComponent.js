class SimpleComponent extends React.Component {
  render() {
    return <div className="myDiv">Hello, {this.props.name}</div>;
  }
}

let Camper = (props) => {
  return (<p>{props.name}</p>);
}

Camper.defaultProps = {
  name: "CamperBot"
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
this.increment=this.increment.bind(this);
this.decrement=this.decrement.bind(this);
this.reset=this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
increment() {
  this.setState(state =>({
    count:state.count + 1
  }));
}
decrement(){
  this.setState(state =>({
    count:state.count - 1
  }));
}
reset(){
  this.setState({
    count:0
  });
}
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

class SecondCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  increment() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    setInterval(() => this.increment(), 1000);
  }

  render() {
    return <div>Second: {this.state.seconds}</div>;
  }
}

const divStyle = {
  margin: "10px",
  border: "2px solid black",
  padding: "5px"
};

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) return;

    this.setState(state => ({
      items: state.items.concat(state.text),
      text: ""
    }));
  }

  render() {
    return (
      <div style={divStyle}>
        <h1>ToDoList</h1>
        <form>
          <p>Enter items:</p>
          <input onChange={this.handleChange} value={this.state.text} />
          <button onClick={this.handleSubmit}>
            Add item {this.state.items.length + 1}
          </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
