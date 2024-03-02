import txt from "../assets/txt-img.png";
import meet from "../assets/meet-app.png";
import fm from "../assets/fm.png";
const Project = () => {
  return (
    <div className="backfirst text font-hero md:flex-row" id="project">
      <h1 className=" flex justify-center text-5xl py-20 ">Project</h1>

      <div className="flex justify-around py-5">
        <div className="">
          <img className="h-[300px] hover:blur-sm" src={fm} />
          <p className="font-bold">Face mask detection using deep learning</p>
        </div>

        <div>
          <img className="h-[300px] hover:blur-sm" src={meet} />
          <p className="ml-5 font-bold">
            MeetMax application using API & Android Studio{" "}
          </p>
        </div>
        <div className="">
          <img className="h-[300px] hover:blur-sm" src={txt} />
          <p className="font-bold">Create Web Page Image-to-Text Converter</p>
        </div>
      </div>
    </div>
  );
};
export default Project;
