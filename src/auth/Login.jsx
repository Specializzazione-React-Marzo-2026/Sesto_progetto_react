import { useNavigate } from "react-router";

export default function Login() {

  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    redirect("/");
  };

  return (
    <>
      <div className="container">
        <section className="row justify-content-center">
          <article className="col-12 col-md-8">
            <h1 className="mt-3">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mt-3">Email address</label>
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