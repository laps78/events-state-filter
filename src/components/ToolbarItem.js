function ToolbarItem(name) {
  const handleClick = (evt) => {
    console.log(evt.target + ' clicked!')
  };

  return (
    <div className="ToolbarItem" onClick={handleClick}>
      ToolbarItem
    </div>
  );                                                                        
}

export default ToolbarItem;
