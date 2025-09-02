import Accordion from "../components/support/accordion.jsx";
import Team from "../assets/images/support.png";

function Support() {
  return (
    <div>
      <div className="bg-amber-500 h-50 text-left pl-5 flex">
        <div className="w-full">
          <h1 className="text-5xl p-5 pl-0">We're Here for <span className="italic">You...</span></h1>
          <input
            type="text"
            placeholder="Text"
            className="pb-2 bg-white rounded-l-full p-2 border-black w-1/2"></input>
          {/* change button to keydown event */}
          <button
            type="button"
            className="p-2 cursor-auto rounded-r-full w-20 bg-gray-300 border hover:cursor-pointer">
            Search
          </button>
        </div>
        <img src={Team} className="h-50 justify-start w-125 pr-45" />
      </div>
      <div className="bg-black p-7 border-">
        <Accordion className="m-4" />
      </div>
    </div>
  );
}

export default Support;
