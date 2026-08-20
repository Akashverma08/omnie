import {useSelector} from "react-redux";
const Header = () => {
    const selector=useSelector((state)=>state.cart.value);
    return (
        <header className="navbar">

            <div className="logo">
                MyShop
            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
            </nav>

            <div className="cart" >
                🛒
                <span className="cart-count">{selector}</span>
            </div>

        </header>
    );
};

export default Header;