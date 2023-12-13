const Login = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6 bg-light py-5">
          <h2 className="text-center">Login</h2>
          <label htmlFor="email" className="form-label my-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email :"
          />
          <label htmlFor="pass" className="form-label my-3">
            Password
          </label>
          <input
            type="password"
            id="pass"
            className="form-control"
            placeholder="password :"
          />
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary my-4 w-50">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
