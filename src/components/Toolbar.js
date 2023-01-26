import ToolbarItem from "./ToolbarItem";

function Toolbar(props) {
  return (
    <div className="Toolbar">
      {props.filters.map(filter => {
        return (
          <ToolbarItem
            key={filter.toString()}
            name={filter}
            selected={props.selected}
          />)
      })}
    </div>
  );
}

export default Toolbar;
