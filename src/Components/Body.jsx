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
        <h1 className="Heading">New Collections</h1>
        </div>
        <div className="Collec-pic">
            <img src={Women} alt="Womens"/>
            <div className="H1"><h1>Womens Collection</h1></div>
            <img src={Men} alt="Men"/>
            <div className="H2"><h1>Mens Collection</h1></div>
            <img src={Kids} alt="Kids"/>
            <div className="H3"><h1>Kids Collection</h1></div>
        </div>
        
        </>

    );
}
export default Body;