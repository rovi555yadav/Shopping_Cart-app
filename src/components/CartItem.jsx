
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] px-10 py-8">

        <div >
          <img className=" object-contain h-48 w-96"src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="text-ellipsis overflow-hidden text-left  ">{item.description}</h1>
          <div>
            <p className="text-green-500 text-lg text-bold"> $ {item.price}</p>
            <div className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={removeFromCart}>
             Remove Item
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
