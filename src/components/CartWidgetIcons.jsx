import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
//  import { useContext } from "react";
 import { useCart } from "../context/CartContext";
 
 const CartWidgetIcons = () => {
     // const {cart}= useContext(CartContext)
     const {cart} = useCart()
     const {cartQuantity} = useCart();
    
     return <div>
         <TiShoppingCart color='white' fontSize={'1.5rem'}/>
         {/* <Badge bg="danger">{cart.length}</Badge> */}
        { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
     </div>
 }
 export default CartWidgetIcons;