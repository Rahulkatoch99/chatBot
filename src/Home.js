import React, { useState } from "react";
import ChatBot from "./ChatBot";
import { Document, Page, pdfjs } from "react-pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="row mt-4">
              <h2 className="text-primary">PDF Viewer</h2>
            </div>
            <div className="row"></div>
            <div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "750px",
                  }}
                >
                  <Viewer fileUrl="CS002.pdf" />
                </div>
              </Worker>
            </div>
          </div>
          <div className="col-md-6">
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
};
