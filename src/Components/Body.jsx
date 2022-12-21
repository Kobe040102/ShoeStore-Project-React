import "../Style/BodyStyle.css"
import Women from "../Images/Women-Shoes.png"
import Men from "../Images/Men-Shoe.jpg"
import Kids from "../Images/Kids-Shoes.jpg"
function Body() {
    return(
        <>
        <div className="Bg">
        <h1>Welcome</h1>
        <h1>to</h1>
        <h1>Shoe<span className="Fi">Fit</span>Market</h1>
        </div>
        <div className="Bod">
        <h1 className="Heading">Our Products</h1>
        </div>
        <div className="Collec-pic"> 
        
            <img src={Women} alt="Womens"/>
            
            <img src={Men} alt="Men"/>
            
            <img src={Kids} alt="Kids"/>
            <div className="Collec-Ti">
            <h1>Womens Collection</h1>
            <h1>Mens Collection</h1>
            <h1>Kids Collection</h1>
            </div>
        </div>
        <div className="Sales">
            <h1>On Sale</h1>
            
        </div>
        </>

    );
}
export default Body;