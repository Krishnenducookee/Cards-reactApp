
import { themeContext } from './App'

const Card_Component = () => {
  
  return (
     <themeContext.Consumer>{contextValue=>{

      const cardBackground=contextValue==="white"?"black":"white";
  
      
      const cardClassName="rounded w-80 h-96 bg-"+cardBackground;
      const textClassName="text-"+contextValue

     return (
    <div className={cardClassName}>
        <div className="px-6 py-4">
            <p className={textClassName}>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
              This is Text inside Cards<br/>
            </p>
          </div></div>)}}
           </themeContext.Consumer>
  )
}

export default Card_Component
