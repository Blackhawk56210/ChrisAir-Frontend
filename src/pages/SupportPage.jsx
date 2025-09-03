import Accordion from "../components/support/Accordion.jsx";
import Team from "../assets/images/support.png";

function Support() {
  return (
    <div>
      <div className="bg-[#D4AF37] text-left flex flex-col md:flex-row items-center md:items-start p-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl p-2 md:p-5 pl-0">
            We're Here for <span className="italic">You...</span>
          </h1>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Text"
              className="pb-2 bg-white rounded-l-full p-2 border-black w-3/4 md:w-1/2"
            />
            <button
              type="button"
              className="p-2 rounded-r-full w-1/4 md:w-20 bg-gray-300 border hover:cursor-pointer"
            >
              Search.
            </button>
          </div>
        </div>
        <img
          src={Team}
          className="h-32 w-32 md:h-50 md:w-125 md:hidden sm: hidden"
          alt="Support Team"
        />
      </div>
      <div className="bg-black p-4 md:p-7">
        <Accordion className="m-2 md:m-4" />
      </div>
    </div>
  );
}

export default Support;
