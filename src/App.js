import "./index";
import "./assets/css/App.scss";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="project-container">
      <header>
        <div class="child">
          <Header />
        </div>
      </header>
      <section className="content-wrapper">
        <div class="child">aside</div>
        <div class="child main-content">Content</div>
      </section>
      <footer>
        <div class="child">Footer</div>
      </footer>
    </div>
  );
}
export default App;
