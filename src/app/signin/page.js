export default function Page() {
  return (
    <>
      <div style={{ backgroundColor: "#ffc8dd", minHeight: "100vh" }}>
        <div style={{ paddingTop: "15vh" }}></div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sign In</h4>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGroup1"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInputGroup1">Username</label>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-key"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInputGroup2"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingInputGroup2">Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
