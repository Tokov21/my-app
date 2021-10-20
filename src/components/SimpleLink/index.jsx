function SimpleLink(props) {
  return (
    <a href={props.link} style={props.style}>
      {props.text}
    </a>
  );
}

export default SimpleLink;
