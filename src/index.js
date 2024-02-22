import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
)


//We copied the dependencies from the github
//To install those dependencies we execute the following command and the respective dependencies with the mentioned versions are installed
// npm install --legacy-peer-deps