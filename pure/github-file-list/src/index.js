import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './Time';
import './index.css';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {
        files.map(file => (
          <FileListItem key={file.id} file={file} />
        ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array.isRequired
}

const FileListItem = ({ file }) => (
  <tr className="file-list-item" key={file.id}>
    <td><FileIcon file={file} /></td>
    <td><FileName file={file} /></td>
    <td className="commit-message">
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileList.propTypes = {
  file: PropTypes.object.isRequired
}

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';

  if (file.type === "folder") {
    icon = "fa-folder";
  }

  return (
    <td className='file-icon'>
      <i className={`fa ${icon}`} />
    </td>);
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function FileName({ file }) {
  return (
    <>{file.name}</>
  );
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
  <>{commit.message}</>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2021-08-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2021-09-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2021-08-28 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];

ReactDOM.render(<FileList files={testFiles} />, document.querySelector('#root'));