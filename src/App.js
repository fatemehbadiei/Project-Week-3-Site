import "./App.css";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Pages";
import SignInPages from "./Pages/signin";



function App() {
    return (
        <Router className="App">
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/signin" element={<SignInPages/>} exact/>
            </Routes>
        </Router>
    );
}

export default App;
