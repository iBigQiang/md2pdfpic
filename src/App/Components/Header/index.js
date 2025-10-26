import React from "react";
import styled from "styled-components";
import UploadButton from "./Upload.js";
import { exportAsLongImage } from "../../Lib/exportImage.js";
const Header = ({ className }) => {
  const onExportPDF = () => {
    // get the file name
    let candidateTitle = "";
    const previewEl = document.querySelector(".preview");
    const candidateTitleEl = previewEl.querySelector("h1");
    if (candidateTitleEl) {
      candidateTitle = candidateTitleEl.innerText;

      // do the effect change the title
      const currentTitle = document.title;
      document.title = candidateTitle;
      window.requestAnimationFrame(() => {
        // schedule resume back in next frame
        document.title = currentTitle;
      });
    }
    window.print();
  };

  const onExportAsImage = async () => {
    // 获取文件名
    let filename = "markdown-export";
    const previewEl = document.querySelector(".preview");
    const candidateTitleEl = previewEl.querySelector("h1");
    if (candidateTitleEl) {
      filename = candidateTitleEl.innerText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-');
    }
    
    await exportAsLongImage(filename);
  };
  return (
    <header className={className + " no-print"}>
      <p className="project"> md2pdfpic </p>
      <iframe
        title="github-button"
        className="project"
        style={{ display: "block" }}
        src="https://ghbtns.com/github-btn.html?user=realdennis&repo=md2pdfpic&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="100px"
        height="20px"
      />

      <div className="menu">
        <UploadButton className="button upload">
          <span role="img" aria-label="upload">
            📁
          </span>
          <span>导入MD文件</span>
        </UploadButton>
        <p className="button export-pdf" onClick={onExportPDF}>
          <span role="img" aria-label="pdf">
            📄
          </span>
          <span>导出为PDF</span>
        </p>
        <p className="button export-image" onClick={onExportAsImage}>
          <span role="img" aria-label="image">
            🖼️
          </span>
          <span>导出为长图</span>
        </p>
      </div>
      {/* <span className="author">Powered by @realdennis</span> */}
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  .project {
    font-weight: bold;
    margin: 5px;
    flex-shrink: 0;
    height: 20px;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      border-radius: 3px;
      border: 1px solid black;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 14px;
      background: white;
      transition: all 0.2s ease;
      &:hover {
        background-color: #f0f0f0;
        transform: translateY(-1px);
      }
      span:first-child {
        margin-right: 6px;
      }
    }
    .upload {
      background-color: #e3f2fd;
      border-color: #2196f3;
      &:hover {
        background-color: #bbdefb;
      }
    }
    .export-pdf {
      background-color: #fff3e0;
      border-color: #ff9800;
      &:hover {
        background-color: #ffe0b2;
      }
    }
    .export-image {
      background-color: #f3e5f5;
      border-color: #9c27b0;
      &:hover {
        background-color: #e1bee7;
      }
    }
  }

  /* span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
    z-index:99;
  } */
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
