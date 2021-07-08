import React, {Component} from 'react';

export default class navName extends Component{

    render(){
        let homeURL = "../../public/index.html";

        return(
            <div className="logo">
                <a className="title" href={homeURL}>
                    {"// lucas kobashi <"}
                </a>
            </div>
        )
    }
}