import { useContext } from "react"
import { themeContext } from "./App"

const Card_Component = () => {
  const contextValue=useContext(themeContext)
  return (
    //  <themeContext.Consumer>{contextValue=>{

    //  return (
    <div className={`rounded w-80 h-96 bg-${contextValue==="white"? "black" :"white"}`}>
        <div className="px-6 py-4">
            <p className={`text-${contextValue}`}>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
            </p>
          </div></div>
          // )}}
          //  </themeContext.Consumer>
  )
}

export default Card_Component
