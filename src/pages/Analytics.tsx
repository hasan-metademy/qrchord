import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics: React.FC = () => {
  // Mock data for demonstration purposes
  const scanData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Scans',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const locationData = {
    labels: ['USA', 'UK', 'Canada', 'Australia', 'Germany'],
    datasets: [
      {
        label: 'Scans by Country',
        data: [120, 90, 70, 60, 50],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Scans Over Time</h2>
          <Line data={scanData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Device Usage</h2>
          <Bar data={deviceData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Locations</h2>
          <Bar data={locationData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>QR Code #1234</span>
              <span className="text-gray-500">5 mins ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>QR Code #5678</span>
              <span className="text-gray-500">10 mins ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>QR Code #9101</span>
              <span className="text-gray-500">15 mins ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;