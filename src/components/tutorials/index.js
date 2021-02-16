import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AddTutorial from "./AddTutorial";
import TutorialsList from "./TutorialsList";

function TutorialsApp() {
  return (
   <div className="container">
     	<div className="flex-row">
         <div className="flex-large">
           <h2>Add Tutorials</h2>
           <AddTutorial />
         </div>
         <div className="flex-large">
            <h2>List of  Tutorials</h2>
            <TutorialsList/>
         </div>
       </div>
    </div>
  );
}

export default TutorialsApp;
