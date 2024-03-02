import bio from "../assets/bio.jpg";
const Biography = () => {
  return (
    <div className="font-hero flex text backfirst py-20 " id="bio">
      <h1 className="text-5xl py-20 ml-20 mt-14">Biography</h1>

      <div className="bio text-white">
        <h1>
          Looking for a challenging role in a dynamic, stable organisation to
          utilise my technical and analytical skills for the growth of the
          organisation, as well as to enhance my knowledge on web application
          development. I am eager to apply my knowledge and expertise in
          creating innovative solutions. I am committed to continuous learning
          and strive to stay updated with the latest trends in technology.
        </h1>
      </div>

      <img className="h-[550px] mr-20" src={bio} />
    </div>
  );
};
export default Biography;
