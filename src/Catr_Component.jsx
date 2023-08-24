import { useContext,useState  } from "react"
import { themeContext } from "./App"


const Card_Component = () => {
   const contextValue =useContext(themeContext)
   const [text, settext] = useState("")
   
    const cardBackground=contextValue?"bg-black":"bg-white"
    const textColor=contextValue?"white":"black"
  return (
    //  <themeContext.Consumer>{contextValue=>{
  
    //  return (
    <div className={`rounded w-80 h-96 ${cardBackground}`}>
        <div className="px-6 py-4">
            <p className={`text-${textColor}`}>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
            </p>
            <input type="text" name="text1" className="mt-6"
             placeholder="Type here" onChange={(e)=>{settext(e.target.value)}}/>
          </div></div>
          // )}}
          //  </themeContext.Consumer>
  )
}

export default Card_Component
