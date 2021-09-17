import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './components/github/FileList';
import GitFiles from './data/git-data';
import Tweeter from './components/twitter/Twitter';
import testTweet from './data/tweet-data';
import Twillo from './components/trello/Twillo';
import TwilloTasks from './data/twillo-data';

const Execrise = () => (
    <div>
        <h1 style={{textAlign: 'center'}}>Pure One Eexercise 1 and 2</h1>
        <div className="show-case">
            <FileList files={GitFiles} />
        </div>
        <div className="show-case">
            <Tweeter tweets ={testTweet}/>
        </div>
        <div className="show-case">
            <Twillo twi={TwilloTasks}/>
        </div>
    </div>
);

ReactDOM.render(<Execrise />, document.querySelector('#root'));