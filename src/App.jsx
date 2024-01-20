import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import "./App.css";
import { Cart } from "./components/cart.jsx";
import { Home } from "./components/Home.jsx";
import { Error } from "./components/Error.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
