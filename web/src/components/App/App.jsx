import React, {Component} from 'react';
import './app.scss';

import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default class App extends Component {

    render() {
        return (
            <div>
                <HeaderMenu/>
            </div>
        )
    }
}