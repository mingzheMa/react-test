import Nav from "../Nav";

export default props => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>{props.children}</div>
    </div>
  );
};
