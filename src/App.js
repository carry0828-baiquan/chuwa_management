

import LoginWidget from './general_components/LoginWidget/LoginWidget'
import TopBar from "./general_components/TopBar/TopBar"
import BottomBar from "./general_components/BottomBar/BottomBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


function App() {
  return (
    <div className="flex flex-col h-screen">
            <TopBar/>
            <LoginWidget/>
        <BottomBar/>
    </div>
  );
}

export default App;
