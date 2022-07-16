import { Routes, Route, Link, Outlet } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";
import FreeComponent from "./pages/FreeComponent";
import AuthComponent from "./pages/AuthComponent";
import Account from "./pages/Account";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <Link to="/">Home</Link>
              <Link to="/free">Free Component</Link>
              <Link to="/auth">Auth Component</Link>
            </section>
          </Col>
        </Row>

        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="free" element={<FreeComponent />} />
          <Route
            path="/auth"
            element={
              <ProtectedRoutes>
                <AuthComponent />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
