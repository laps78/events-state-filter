import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
// import { useState } from 'react';

function Portfolio() {
  // const initialState = null;
  // const [filters, selected, projects] = useState(initialState);

  return (
    <div className="Portfolio">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
      />
      <ProjectList />
    </div>
  );
}

export default Portfolio;
