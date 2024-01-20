import { Col, Row, Table } from "react-bootstrap";
import data from "../data/products.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CartItem } from "./cartItem.jsx";

export const Cart = () => {
    const cart = useSelector(state => state.cart);
  return (
    <>
      <section className="py-5 cart">
            {
                cart?.list && cart?.list?.length > 0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.list.map(
                                    item => {
                                        return (
                                            <CartItem data={item} key={item.id} />
                                        )
                                    }
                                )
                            }
                            <tr style={{fontSize: "20px", textAlign: "right"}}>
                                <td colSpan={3}>Total: </td>
                                <td colSpan={2}>{cart?.total}$</td>
                            </tr>
                        </tbody>
                    </Table>
                ) : null}
        <ToastContainer />
      </section>
    </>
  );
};