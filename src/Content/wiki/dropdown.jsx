import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import Agents from "./agents";
const dropdown = () => {
  
 
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
    <button onClick={() => setIsOpen((prev) => !prev)}>
      Dropdown
      {!isOpen ? (
        <AiOutlineCaretDown className="drop"/>
      
      ):(
        <AiOutlineCaretUp className="drop"/>
      )
    }
    </button>

    {isOpen && (
      <div>
        
         {displayName}
        
      </div>
    )}
  </div>
  );
}

export default dropdown