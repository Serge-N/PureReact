import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './components/github/FileList';
import GitFiles from './data/git-data';
import Tweeter from './components/twitter/Twitter';
import testTweet from './data/tweet-data';

const Execrise = () => (
    <div>
        <h3>Pure One Eexercise 1 and 2</h3>
        <div className="show-case">
            <FileList files={GitFiles} />
        </div>
        <div className="show-case">
            <Tweeter tweets ={testTweet}/>
        </div>
    </div>
);

ReactDOM.render(<Execrise />, document.querySelector('#root'));