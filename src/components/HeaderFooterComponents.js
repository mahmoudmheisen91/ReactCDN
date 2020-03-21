class HeaderComponent extends React.Component {
  render() {
    return <header>{this.props.text}</header>;
  }
}

class FooterComponent extends React.Component {
  render() {
    return <footer>&copy; 2020 Mahmoud Mheisen</footer>;
  }
}
