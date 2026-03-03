import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar className="header-nav">
            
                <div className="random-color">
                   <NavLink to="/"><img src="https://static.vecteezy.com/system/resources/thumbnails/016/774/480/small_2x/3d-shopping-cart-icon-on-transparent-background-free-png.png"/>Products</NavLink>   
                </div>
            </Navbar>
        </>
    )
}

export default Header;