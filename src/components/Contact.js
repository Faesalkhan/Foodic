const Contact = () => {
  return (
    <div className="container contactuspage">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <form action="">
            <h2>Contact Us</h2>
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name :"
            />
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email :"
            />
            <label htmlFor="message" className="form-label"></label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="type your message here..."
            ></textarea>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
