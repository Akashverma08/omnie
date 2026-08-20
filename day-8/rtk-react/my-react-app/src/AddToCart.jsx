import {useDispatch} from "react-redux"
import {addItem} from "./redux/slice"
const AddToCart = () => {

    const dispatch=useDispatch();

    const handleAddToCart = () => {
        console.log("Product added to cart");
    };

    return (
        <button onClick={() => dispatch(addItem(1))}>
            Add to Cart
        </button>
    );
};

export default AddToCart;