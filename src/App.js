import "./index";
import "./assets/css/App.scss";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <div className="project-container">
      <header>
        <div className="child">
          <Header />
        </div>
      </header>
      <section className="content-wrapper">
        <div className="child">
          <Sidebar/>
        </div>
        <div className="child main-content">Content</div>
      </section>
      <footer>
        <div className="child">Footer</div>
      </footer>
    </div>
  );
}
export default App;
