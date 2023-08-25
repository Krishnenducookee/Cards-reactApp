import { useContext} from "react"
import { ThemeContext } from "./App"




const CardComponent = ({text,onChange}) => {
  console.log(text);
   const isThemeWhite =useContext(ThemeContext)
   
    const cardBackground=isThemeWhite?"bg-black":"bg-white"
    // const textColor=contextValue?"text-white":"text-black"
    
    //  localStorage.setItem('text',text)
   

  return (
    //  <themeContext.Consumer>{contextValue=>{
  
    //  return (
    <div className={`rounded w-80 h-96 ${cardBackground}`}>
        <div className="px-6 py-4">
            {/* <p className={textColor}>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
            </p> */}
            <input type="text" name="text1" className="mt-6"
             value={text}
             onChange={(e)=>{
              onChange(e.target.value)
             }}/>
          </div></div>
          
          // )}}
          //  </themeContext.Consumer>
  )
}

export default CardComponent
