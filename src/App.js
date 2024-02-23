import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import DemoForm from './components/DemoForm';
import LoginForm from './components/LoginForm';
import "./assets/scss/main.scss";


function App() {

    library.add(fas, far, fab);

    return (
        <BrowserRouter>
            <div className="App">
                <DemoForm />
                {/* <LoginForm /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
