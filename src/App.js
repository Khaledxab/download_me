import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Download Our App</h1>
        <p className="app-description">Experience the future of " Netverse  " today.</p>
        <div className="download-section">
          <a
            className="download-button"
            href="/path/to/your/app.apk"
            download
          >
            Download Now
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
