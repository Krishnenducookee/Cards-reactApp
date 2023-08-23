
import { themeContext } from './App'

const Card_Component = () => {
  
  return (
     <themeContext.Consumer>{contextValue=>{

      const cardBackground = contextValue==="white"? "black" :"white";

     return (
    <div className={`rounded w-80 h-96 bg-${cardBackground}`}>
        <div className="px-6 py-4">
            <p className={`text-${contextValue}`}>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
            </p>
          </div></div>)}}
           </themeContext.Consumer>
  )
}

export default Card_Component
