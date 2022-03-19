import {Button, Form, FormGroup, Label, Input} from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage'
import TopBar from "./general_components/TopBar/TopBar"
function App() {
  return (
    <div className="App">
        <TopBar/>
      <LoginPage/>
    </div>
  );
}

export default App;
