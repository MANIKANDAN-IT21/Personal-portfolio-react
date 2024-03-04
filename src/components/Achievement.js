import prize1 from "../assets/prize1.JPG";
const Achievement = () => {
  return (
    <div className="font-hero text backfirst" id="achievements">
      <h1 className="flex justify-center text-5xl py-20">Achievements</h1>
      <div className="flex justify-around left:py-5">
        {" "}
        <img className="h-[500px] ml-20" src={prize1} />
        <div className="Achievement ml-10 mt-20">
          <h1 className="text-2xl py-4">SEP-2022</h1>
          <p className="text-white">
            -IET'22, organised by IET Chennai Local Networks, secured the 3rd
            award and won <span className="font-bold text">Rs 10,000.</span>
          </p>
          <h1 className="text-2xl py-4">Dec-2022</h1>
          <p className="text-white">
            -BITHACKS '22" - organised by Bannari Amman Institute of Technology.
            Secured Best Designer Award and won{" "}
            <span className="font-bold text ">Rs 5000.</span>
          </p>
          <div>
            <a
              href="https://drive.google.com/drive/folders/17AjWv2duDJVcMQDm5UzmtgaAkN612RgM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="ml-40 py-10 hover:text-white">- Certificates -</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
