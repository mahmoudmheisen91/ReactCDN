class SimpleComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

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
