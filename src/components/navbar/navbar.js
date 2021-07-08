import React, {Component} from 'react';
import Items from './navItems';
import Logo from './navName';

export default class navbar extends Component{

    // TODO
    // this is the mainframe, will detect the screensize
    // regular size = regular stuff
    // small size, show hamburger and when click it will show the sidebar

    switch(){
        if (this.status === null){
            this.status = 'active';
        }
        else{
            this.status = null;
        }
    }

    baseRender(){
        return(
            <div className='navbar'>
                <Logo />
                <input id="hamburger" type="checkbox" style={{display: 'none'}}/>
                <label htmlFor="hamburger">
                    <div className={this.status}/>
                </label>
                <Items />
            </div>
        )
    }

    render() {
        return(
            <span>{this.baseRender()}</span>
        );
    }
}