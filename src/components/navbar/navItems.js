import React, {Component} from 'react';

export default class navItems extends Component{

    states = {
        /**
         * tag[0]: title to be displayed
         * tag[1]: ling to be referenced
         * tag[2]: icon name
         */
        tags:
            [["home ", "https://lucaskobashi.github.io", "home"],
            ["contact ", "https://google.com", "contact_page"],
            ["courses ", "https://google.com", "school"],
            ["files ", "https://google.com", "folder"],
            ["spotify ", "https://google.com", "play_circle_outline"]]
    }

    render(){
        return(
            <ul className={"menu"}>
                {this.states.tags.map(tag =>
                    <li key={tag[0]}><a className={"menu"} href={tag[1]}>
                        {tag[0]}
                        <i className="material-icons-outlined" style={{fontSize: 19, verticalAlign: 'bottom'}}>
                        {tag[2]}
                        </i>
                    </a></li>)}
            </ul>
        );
    }
}