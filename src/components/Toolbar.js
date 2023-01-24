import ToolbarItem from "./ToolbarItem";

function Toolbar(props) {
  return (
    <div className="Toolbar">
      {props.filters.map(filter => {
        return (<ToolbarItem filterName={filter} />)
      })}
    </div>
  );
}

export default Toolbar;
