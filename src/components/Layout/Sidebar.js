import React from "react"; 
import "../../assets/css/sidebar.scss"

function Sidebar(props) {
  return (
    <>
        <div className="sidebar close">
          <ul className="nav-links">
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Dashboard</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    dashbord1
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
                <a href="#">
                  <span className="link_name">Category</span>
                </a>
                <i className="bx bxs-chevron-down arrow"></i>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Category
                  </a>
                </li>
                <li>
                  <a href="#">HTML & CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">PHP & MySQL</a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
                <a href="#">
                  <span className="link_name">Posts</span>
                </a>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Login Form</a>
                </li>
                <li>
                  <a href="#">Card Design</a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Analytics</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Analytics
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Chart</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
                <a href="#">
                  <span className="link_name">Plugins</span>
                </a>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Plugins
                  </a>
                </li>
                <li>
                  <a href="#">UI Face</a>
                </li>
                <li>
                  <a href="#">Pigments</a>
                </li>
                <li>
                  <a href="#">Box Icons</a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Explore</span>
              </a>
              <ul className="sub-menu blank">
                <li className="main-menu">
                  <a className="link_name" href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">History</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    History
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu">
              <a href="#">
                <span className="link_name">Setting</span>
              </a>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

    </>
  );
}

export default Sidebar;
