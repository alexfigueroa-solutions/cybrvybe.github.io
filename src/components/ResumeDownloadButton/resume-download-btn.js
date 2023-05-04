import React from 'react';
import resume_file from './resume.pdf';
import './resume-download-btn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
export default class ResumeDownloadBtn extends React.Component {
  render() {
    return (
      <div className="resumeDownloadBtnWrapper">
        <a className="resumeDownloadBtnLink" href={resume_file} download>
          <div className="resumeDownloadBtnDiv">
            <FontAwesomeIcon
              className="resumeDownloadIcon"
              icon={faDownload}
            ></FontAwesomeIcon>
            <h3 className="resumeDownloadBtn">Resume</h3>
          </div>
        </a>
      </div>
    );
  }
}
