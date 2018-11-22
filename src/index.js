import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const library=[

    { name: 'GitHub', url: 'https://github.com/'},
    { name: 'Python', url: 'https://www.python.org/'},
    { name: 'Sass', url: 'https://sass-lang.com/'},
    { name: 'Bootstrap', url: 'https://getbootstrap.com/'},
    { name: 'Java', url: 'http://java.com/'},
    { name: 'VK', url: 'http://vk.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name:'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'https://jquery.com/'},
    {name: 'Backbone.js', url: 'https://documentcloud.github.io/backbone/'},
    { name: 'React', url: 'https://facebook.github.io/react/'},
    { name: 'Underscore', url: 'https://documentcloud.github.io/underscore/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'https://knockoutjs.com/'},
    { name: 'Lodash', url: 'http://lodash.com/'},

];

ReactDOM.render(<App list={library}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
