import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const buttonOne = {
    width: "32px",
    height: "32px",
    lineHeight: "27px",
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "transparent",
    border: "1px solid #ccc"
};

const input = {
    width: "38px",
    height: "32px",
    lineHeight: "27px",
    border: "1px solid #ccc",
    borderRight: "none",
    borderLeft: "none",
};

export const CartItem = ({data}) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(data?.quantity);
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity);

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
        setQuantity(value);
    }

    useEffect(() => {
        setTotalPrice(data?.price * quantity);
        dispatch(updateQuantity({id: data?.id, quantity}));
    }, [quantity, data?.price, data?.id, dispatch]);

    return (
        <tr>
            <td>
                <div>
                    <img src={data.imageUrl} alt="" />
                    <p>{data.name}</p>
                </div>
            </td>
            <td>
                {data.price}$
            </td>
            <td>
                <div>
                    <button style={buttonOne} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                    <input style={input} type="number" value={quantity} onChange={handleChange} />
                    <button style={buttonOne} onClick={() => {if (quantity > 1) {setQuantity(pre => pre - 1)};}}>-</button>
                </div>
            </td>
            <td>
                {totalPrice}$
            </td>
            <td>
                <Button variant="danger" onClick={() => dispatch(removeItem({id: data?.id}))}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </Button>
            </td>
        </tr>
    )
}