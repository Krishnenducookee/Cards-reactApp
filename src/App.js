import { createContext, useEffect, useRef, useState } from "react";
import CardComponent from "./Catr_Component";

export const ThemeContext = createContext(null);

function App() {
  const [isWhite, toggleWhite] = useState(true);
  const firstRender=useRef(true)
  const [textFieldData, setTextFieldData] = useState({
    textFromLeftField: "",
    textFromRightField: "",
  });

  const addToSessionArray = [
    { key: "textFromLeftField", value: textFieldData.textFromLeftField },
    { key: "textFromRightField", value: textFieldData.textFromRightField },
  ];

  const background = `${isWhite ? `white` : `black`}`;
  const textColor = `${isWhite ? `black` : `white`}`;

  useEffect(() => {
    if(firstRender.current){
    setTextFieldData({
      textFromLeftField: sessionStorage.getItem("textFromLeftField"),
      textFromRightField: sessionStorage.getItem("textFromRightField"),
    })};
    firstRender.current=false
    return () => {
      addToSessionArray.forEach((data) => {
        sessionStorage.setItem(data.key, data.value);
      });
    };
  }, [addToSessionArray]);

  const components = [
    {
      text: textFieldData.textFromLeftField,
      onChange: (texttyped) => {
        setTextFieldData({...textFieldData, textFromLeftField: texttyped });
      },
    },
    {
      text: textFieldData.textFromRightField,
      onChange: (texttyped) => {
        setTextFieldData({...textFieldData, textFromRightField: texttyped });
      },
    },
  ];

  return (
    <div>
      <ThemeContext.Provider value={isWhite}>
        <div className={`h-screen pt-40 px-80 bg-${background}`}>
          <label className="relative inline-flex cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onClick={() => {
                toggleWhite(!isWhite);
              }}
            />
            <div
              className="w-11 h-6 bg-black rounded-full after:absolute
            after:rounded-full after:h-4 after:w-5  after:border after:border-white
            after:bg-black after:mt-1 after:transition-all peer-checked:bg-white
            peer-checked:after:translate-x-full after:ml-1"
            ></div>
            <span className={`ml-3 text-sm font-medium text-${textColor}`}>
              Change Theme
            </span>
          </label>
          {components.map((data, index) => (
            <div className={`${index === 1 ? `ml-96 -mt-96` : ``}`}>
              <CardComponent
                key={index}
                text={data.text}
                onChange={data.onChange}
              />
            </div>
          ))}
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
