import "../Style/Navbar.css";
import icon from "../Images/Search icon.png";
import shop from "../Images/Shopping cart.png";
function NavBar() {
  return (
    <>
      <div id="Nav">
        <h1 className="Title">Shoe <span className="Fi">Fit</span> Market</h1>
        <ul>
          <div className="container">
          <form className="search-bar">
              <input type= "text" placeholder="Search..." name="Search"></input>
              <button type="submit"><img src= {icon} alt="icon-img"/></button>
          </form>
        </div>
            <li><a href="Men-Sec">MEN</a></li>
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
          <a href="carting"><img src={shop} className= "Carts" alt="Cart"/></a>
        </ul>
        
      </div>
    </>
  );
}
export default NavBar;
