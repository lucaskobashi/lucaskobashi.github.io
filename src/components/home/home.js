import React, {Component} from 'react';

export default class navbar extends Component{

    state = {
        introText: [
            "> university of saskatchewan",
            "> junior bsc. computer science",
            "> mathematics & physics minor",
            "> global studies certificate (2020)"
        ]
    }

    styles = {
        ulComponent:{
            listStyle: "none"
        },
        liComponent:{
            marginBottom: "5px"
        }
    }

    render(){
        return(
            <ul style={this.styles.ulComponent}>
                {this.state.introText.map(tag => <li style={this.styles.liComponent}>{tag}</li>)}
            </ul>
        )
    }
}