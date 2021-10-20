import SimpleLink from "../SimpleLink";

function Header() {
  return (
    <header>
      Header
      <SimpleLink
        text="Learn React"
        link="https://reactjs.org"
        style={{ color: "blue" }}
      />
    </header>
  );
}

export default Header;
