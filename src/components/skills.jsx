import React, { useState } from "react";
import Work from "./functionality";

function Skills(){
    const [a,b] = useState(null);
    return(
        <div>
        {a}
        <button type="button" className="btn btn-primary" onClick={(() => b(Work()))}>Primary</button>
        </div>
    );

}

export default Skills;

