import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './components/FileList';
import requirejs from 'requirejs';

const gitList = requirejs ('./data/git-data.json');

ReactDOM.render(<FileList files={gitList} />, document.querySelector('#root'));