import { createContext, useState } from "react";
import Card_Component from "./Catr_Component";

export const themeContext = createContext(null);

function App() {
  const [theme, changeTheme] = useState("white");
  // const [theme, changeTheme] = useState({ background: "white", text: "black" });

  const textColor = theme === "white" ? "black" : "white";

  const backgroundClassName = "h-screen pt-40 px-80 bg-" + theme;

  const textClassName = "ml-3 text-sm font-medium text-" + textColor;

  return (
    <div>
      <themeContext.Provider value={theme}>
        <div className={backgroundClassName}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => {
                changeTheme(theme === "white" ? "black" : "white");
                // preState.background === "white"
                //   ? ((preState.background = "black"),
                //     (preState.text = "white"))
                //   : ((preState.background = "white"),
                //     (preState.text = "black"))
              }}
            />
            <div
              className="w-11 h-6 bg-black outline-white peer-focus:ring-4
           peer-focus:ring-white dark:peer-focus:ring-white rounded-full 
           peer dark:bg-black peer-checked:after:translate-x-full
            peer-checked:after:border-black after:content-[''] after:absolute 
            after:top-[2px] after:left-[2px] after:bg-black after:border-white 
            after:border after:rounded-full after:h-5 after:w-5 after:transition-all
             dark:border-black peer-checked:bg-white"
            ></div>
            <span className={textClassName}>Change Theme</span>
          </label>
          <div>
            <Card_Component />
          </div>
          <div className="ml-96 -mt-96 ">
            <Card_Component />
          </div>
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;
