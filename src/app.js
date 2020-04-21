import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';
// import 'normalize.css/normalize.css';
class Info extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from Info class component</h1>
            </div>
        )
    }
}


ReactDOM.render(<Info />, document.getElementById('app'));