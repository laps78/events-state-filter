import ToolbarItem from "./ToolbarItem";

function Toolbar(props) {
  return (
    <div className="Toolbar">
      {props.filters.forEach((filter) => {
        <ToolbarItem name={filter} />;
        })
      }
    </div>
  );
}

export default Toolbar;
