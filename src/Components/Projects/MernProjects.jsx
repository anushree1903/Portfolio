
import { FaBehance } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MernProjectData } from "./ProjectData";

const MernProjects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {MernProjectData.map(({ title, img, live, behance }, index) => (
        <div
          key={index}
          className="flex flex-col w-96 gap-2 bg-gray-50 drop-shadow-xl dark:bg-grey-800 rounded-lg p-4"
        >
          <div className="relative group rounded-lg bg-violet-50">
            <img
              alt="Project Image"
              className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
              src={img}
            />
            <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
              <Link
                to={live}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <BiLinkExternal size={20} />
              </Link>

              <Link
                to={behance}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <FaBehance size={20} />
              </Link>
            </div>
          </div>

          <div className="my-2 flex flex-col gap-3">
            <h3 className="text-xl text-center text-black font-medium">
              {title}
            </h3>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default MernProjects;
