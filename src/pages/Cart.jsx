import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-col ">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row">


      <div className="flex flex-col py-32 px-32   ">
        {
          cart.map( (item,index) => {
            
            return <CartItem className=" flex flex-col px-44 shadow-[5px_5px_0px_0px_rgba(109,40,217)]"key={item.id} item={item} itemIndex={index}  />
            
          } )
        }
      </div>

      <div className="flex flex-col justify-between shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] px-10 py-20 my-10 mx-10">

        <div className="flex flex-col ">
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span className="text-green-500 text-base">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-green-500 text-lg">Total Amount: ${totalAmount}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center pl-96 pt-96">
      <h1 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
