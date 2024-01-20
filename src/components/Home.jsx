import { Card, Button } from "react-bootstrap";
import data from "../data/products.json";
import { addToCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
    const selecotr = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <section className="products py-5">
                {
                    data.map(
                        product => {
                            const {id, name, author, imageUrl, price} = product;
                            return <Card key={id} className="product">
                                <Card.Img variant="top" src={imageUrl} />
                                <Card.Body>
                                    <Card.Title className="name">{name}</Card.Title>
                                    <Card.Title className="author my-3 fst-italic fw-normal text-secondary">{author}</Card.Title>
                                    <div className="price-btn d-flex justify-content-between align-items-center">
                                        <p className="price mb-0 fw-bold text-danger fs-4">{price}$</p>
                                        <Button onClick={() => dispatch( addToCart({...product, quantity: 1}) )} variant="success">Add To Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        }
                    )
                }
            </section>
            <ToastContainer />
        </>
    )
};