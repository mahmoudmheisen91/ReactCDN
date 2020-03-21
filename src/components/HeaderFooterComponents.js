const HeaderStyle = {
  position: "relative",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "rgba(11, 13, 97, 0.767)",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "wheat"
};

const FooterStyle = {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  right: "0px",
  margin: "10px",
  padding: "5px",
  borderRadius: "10px",
  backgroundColor: "rgba(11, 13, 97, 0.767)",
  textAlign: "right",
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "wheat"
};

class HeaderComponent extends React.Component {
  render() {
    return <div style={HeaderStyle}>{this.props.text}</div>;
  }
}

class FooterComponent extends React.Component {
  render() {
    return <div style={FooterStyle}>&copy; 2020 Mahmoud Mheisen</div>;
  }
}
