import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
    const selector = useSelector(state => state.cart);
    return (
        <header className="text-white py-3">
            <Container className="d-flex justify-content-between align-items-center">
                <Link to="/">
                    <h1 className="fw-bold mb-0">NHN</h1>
                </Link>
                <Link className="position-relative d-flex" to="/cart">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="d-flex justify-content-center align-items-center position-absolute">{selector.list.length}</span>
                </Link>
            </Container>
        </header>
    )
}