import { LOGO_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="container aboutus-container">
      <div className="row">
        <div className="col-sm-8 col-md-10 col-lg-12 text-center">
          <img src={LOGO_URL} />
          <p>
            Foodic is a food ordering web application built with ReactJS and
            swiggy's API.
          </p>
          <h1 className="bg-danger p-2 fixed-bottom">created by FAISAL KHAN</h1>
        </div>
      </div>
    </div>
  );
};
export default About;
