

import Login_widget from './pages/Login_widget/Login_widget'
import TopBar from "./general_components/TopBar/TopBar"
import BottomBar from "./general_components/BottomBar/BottomBar"
import {Stack, Container, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  return (
    <div className="App">
            <TopBar/>
        <Login_widget/>
    </div>
  );
}

export default App;
