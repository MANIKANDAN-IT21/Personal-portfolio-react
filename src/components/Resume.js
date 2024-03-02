import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <thrid className="flex flex-col md:flex-row backfirst px-5" id="resume">
      <div className="md:w-1/2 flex justify-center py-20">
        <img className="h-[500px] py-3" src={resume} />
      </div>
      <div className=" md:w-1/2 flex justify-center font-hero ">
        <div className=" w-1/2 flex flex-col justify-center text">
          <h1 className="text-5xl  py-5">Resume</h1>
          <p className="text-white">
            Experienced Full Stack Developer with proficiency in front-end
            technologies like React and back-end technologies. Basic in database
            management with MongoDB. .
            <br />
          </p>
          <button className="btn">
            <a
              className=" flex py-6"
              href="https://drive.google.com/file/d/1DcykCvh56j7VH7ZK3o34xmcOheRdEynr/view?usp=drive_link"
            >
              Download
            </a>
          </button>{" "}
        </div>
      </div>
    </thrid>
  );
};
export default Resume;
