import React, {Component} from 'react';
import './app.scss';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import LoginForm from "../LoginForm/LoginForm";

export default class App extends Component {

    render() {
        return (
            <div>
                {/*<HeaderMenu/>*/}
                <LoginForm/>
            </div>
        )
    }
}