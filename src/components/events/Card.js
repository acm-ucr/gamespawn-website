const Event = ({ month, day, hour, name, location, description }) => {
  return (
    <div className="flex flex-row justify-center drop-shadow-2xl mx-auto w-10/12 lg:w-8/12">
      <div className="flex flex-col justify-center bg-game-blue-400 rounded-l-2xl text-[#ffffff] py-4 w-1/5">
        <div className="font-russo mt-3 text-center md:text-5xl">{month}</div>
        <div className="font-russo text-center md:text-5xl pt-2">{day}</div>
        <div className="font-russo text-center md:text-3xl py-2">{hour}</div>
      </div>
      <div className="bg-white rounded-r-2xl w-9/12 text-[#303030] pt-4 pb-4">
        <div className="font-russo text-3xl lg:text-4xl ml-5">{name}</div>
        <div className="font-monda ml-5 flex text-left mt-3 text-xl">
          {location}
        </div>
        <div className="font-monda ml-5 mb-2 mt-3 mr-2 text-lg">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
