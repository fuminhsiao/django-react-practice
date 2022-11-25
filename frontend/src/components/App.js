import React, {Component} from "react";
import{render} from "react-dom";
import Hompage from "./Homepage";

export default class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
        <div>
            <Hompage/>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App  />, appDiv);