function ToolbarItem(props) {
  const handleClick = (evt) => {
    console.log(evt.target.textContent + ' clicked!');
    Array.from(evt.target.parentElement.children).map(elem => {
      if (elem.classList.contains('selected')) {
        elem.classList.remove('selected');
      };
    });
    evt.target.classList.add('selected');
  };
  return (
    <div className="ToolbarItem" onClick={handleClick}>
      { props.name }
    </div>
  );                                                                        
}

export default ToolbarItem;
