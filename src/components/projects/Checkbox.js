import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "" }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 mr-2 border-2 border-black flex items-center justify-center`}
      >
        <BsCheckLg
          className={`${toggle ? "text-black" : "text-white"} text-xl`}
        />
      </div>
      {text && <p className="">{text}</p>}
    </div>
  );
};

export default Checkbox;
