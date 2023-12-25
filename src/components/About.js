import { LOGO_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="container aboutus-container">
      <div className="row">
        <div className="col-12 text-center">
          <img src={LOGO_URL} />
          <h1 className="bg-danger p-2 no-wrap">created by FAISAL KHAN</h1>
        </div>
      </div>
    </div>
  );
};
export default About;
