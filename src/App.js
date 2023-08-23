import { createContext, useState } from "react";
import Card_Component from "./Catr_Component";

export const themeContext = createContext(null);

function App() {
  const [theme, changeTheme] = useState("white");
  // const [theme, changeTheme] = useState({ background: "white", text: "black" });

  return (
    <div>
      <themeContext.Provider value={theme}>
        <div className={`h-screen pt-40 px-80 bg-${theme}`}>
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
              className="w-11 h-6 bg-black  rounded-full 
               peer-checked:after:translate-x-full 
             after:absolute after:rounded-full after:h-5 after:w-5  after:border
             after:border-white after:bg-black after:top-[2px] after:left-[2px]
              after:transition-all
              peer-checked:bg-white"
            ></div>
            <span
              className={`ml-3 text-sm font-medium text-${
                theme === "white" ? "black" : "white"
              }`}
            >
              Change Theme
            </span>
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
