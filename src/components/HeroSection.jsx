import { useNavigate } from "react-router";
import WorkingPeople from "../assets/working-people.svg?react";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleWorkerClick = () => {
    navigate("/workers");
  };
  return (
    <section className="relative h-screen dark:bg-maher-primary dark:text-maher-accent  text-maher-primary">
      <div className="  flex flex-col md:flex-row  md:items-center  mx-10 md:justify-center  h-full">
        <div className="my-10 ">
          <h1 className="text-3xl font-heading">
            Maher — Discover & Hire Skilled Workers in Nineveh
          </h1>
          <h2 className="my-5 text-2xl font-body">
            A sleek platform that connects freelance talent with job
            opportunities in Iraq.
          </h2>

          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 ">
            <button
              onClick={handleWorkerClick}
              className="border-maher-accent border-2 p-3 my-3 hover:bg-maher-accent hover:cursor-pointer hover:text-maher-primary rounded-md"
            >
              Looking for a skilled worker
            </button>
          </div>
        </div>
        <div className=" w-full aspect-w-16 aspect-h-9 max-h-[600px] max-w-[800px]  mx-auto">
          <span>
            <WorkingPeople />
          </span>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
