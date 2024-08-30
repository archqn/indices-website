import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';

const TestPlot: React.FC = () => {
  useEffect(() => {
    const plotData = () => {
      const traceObserved: Partial<Plotly.PlotData> = {
        x: ['2024-01-01', '2024-01-02', '2024-01-03'],
        y: [10, 15, 13],
        name: 'Observed AE Index',
        type: 'scatter'
      };

      const tracePredicted: Partial<Plotly.PlotData> = {
        x: ['2024-01-01', '2024-01-02', '2024-01-03'],
        y: [12, 14, 11],
        name: 'Predicted AE Index',
        type: 'scatter'
      };

      const layout: Partial<Plotly.Layout> = {
        title: 'AE Index Plot (Test Data)',
        xaxis: { title: 'Date' },
        yaxis: { title: 'AE Index' }
      };

      Plotly.newPlot('plotDiv', [traceObserved, tracePredicted], layout);
    };

    plotData();
  }, []);

  return <div id="plotDiv"></div>;
};

export default TestPlot;
