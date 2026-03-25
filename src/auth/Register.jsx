export default function Register() {
  return (
    <>
      <div className="container">
        <section className="row justify-content-center">
          <article className="col-12 col-md-8">
            <h1 className="mt-3">Register</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label mt-3">Username</label>
                  <input type="text" className="form-control w-50" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control w-50" id="email" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control w-50" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </article>
        </section>
      </div>


    </>
  )
}