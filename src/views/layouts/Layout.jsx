import { Outlet } from "react-router";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container-fluid">
        <section className="row">
          <article className="col-12 col-md-2 px-0">
            <Sidebar />
          </article>
          <article className="col-12 col-md-10">
            <Outlet />
          </article>
        </section>
      </main>
    </div>
  );
}
