import { createContext, useEffect, useState } from "react";
import CardComponent from "./Catr_Component";

export const ThemeContext = createContext(null);

function App() {

  const [isWhite, toggleWhite] = useState(true);
  const [sessionStorageData, setSessionStorageData] = 
              useState({textFromLeftField:"",textFromRightField:""})

  const background=isWhite?"white":"black"
  const textColor=isWhite?"black":"white"
   
  useEffect(()=>{ 
        setSessionStorageData(
          {textFromLeftField:sessionStorage.getItem('textFromLeftField'),
          textFromRightField:sessionStorage.getItem('textFromRightField')}
          )
   },[])


  const components=[
           {text:sessionStorageData.textFromLeftField,
            onChange:(texttyped)=>{sessionStorage.setItem('textFromLeftField',texttyped)}},
           {text:sessionStorageData.textFromRightField,
            onChange:(texttyped)=>{sessionStorage.setItem('textFromRightField',texttyped)}}]  

  return (
    <div>
      <ThemeContext.Provider value={isWhite}>
        <div className={`h-screen pt-40 px-80 bg-${background}`}>
          <label className="relative inline-flex cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onClick={() => {
                toggleWhite(!isWhite);}}
            />
            <div
              className="w-11 h-6 bg-black rounded-full after:absolute
            after:rounded-full after:h-4 after:w-5  after:border after:border-white
            after:bg-black after:mt-1 after:transition-all peer-checked:bg-white
            peer-checked:after:translate-x-full after:ml-1"
            ></div>
            <span
              className={`ml-3 text-sm font-medium text-${textColor}`}
            >
              Change Theme
            </span>
          </label>     
          {components.map((data,index)=>(
           <div className={`${index===1?`ml-96 -mt-96`:``}`}>
           <CardComponent text={data.text} 
           onChange={data.onChange}/>
           </div>
             ))} 

        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
