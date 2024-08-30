import React from 'react';
import './index.css';
import TestPlot from './components/TestPlot';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-600" >AE Index Plot (Test)</h1>
      </header>
      <main>
        <TestPlot />
      </main>
    </div>
  );
};

export default App;