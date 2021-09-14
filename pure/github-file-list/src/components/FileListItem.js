import React from "react";
import PropTypes from 'prop-types';
import Time from './Time';
import CommitMessage from './CommitMessage';
import FileName from './FileName';
import FileIcon from './FileIcon';

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

  
  export default FileListItem;