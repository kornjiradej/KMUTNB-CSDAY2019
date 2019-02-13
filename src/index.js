import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './Utils/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept()
}