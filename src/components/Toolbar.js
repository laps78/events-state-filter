export default function Toolbar() {
  return (<Toolbar
    filters={["All", "Websites", "Flayers", "Business Cards"]}
    selected="All"
    onSelectFilter={(filter) => { console.log(filter); }} />);
}