import Card_Component from "./Catr_Component";

function App() {
  return (
    <div>
      <div className="bg-white h-screen pt-40 px-80">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-black outline-white peer-focus:ring-4
           peer-focus:ring-white dark:peer-focus:ring-white rounded-full 
           peer dark:bg-black peer-checked:after:translate-x-full
            peer-checked:after:border-black after:content-[''] after:absolute 
            after:top-[2px] after:left-[2px] after:bg-black after:border-white 
            after:border after:rounded-full after:h-5 after:w-5 after:transition-all
             dark:border-black peer-checked:bg-white"
          ></div>
          <span class="ml-3 text-sm font-medium text-black">Change Theme</span>
        </label>
        <div>
          <Card_Component />
        </div>
        <div className="ml-96 -mt-96 ">
          <Card_Component />
        </div>
      </div>
    </div>
  );
}

export default App;
