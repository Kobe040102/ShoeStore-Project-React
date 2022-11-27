import "../Style/Navbar.css";
function NavBar() {
  return (
    <> 
      <div id="Nav">
        <h1 className="Title">Shoe Market</h1>
        <ul>
          <div className="Men-sec">
            <li>
              <a href="Men-Sec">MEN</a>
            </li>
          </div>
          <div>
            <li>
              <a href="Women-Sec">WOMEN</a>
            </li>
          </div>
          <div>
            <li>
              <a href="Kids-Sec">KIDS</a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
