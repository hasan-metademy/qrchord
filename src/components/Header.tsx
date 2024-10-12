import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, BarChart, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <QrCode className="mr-2" />
            QR Code Generator
          </Link>
          <div className="flex space-x-6">
            <NavLink to="/generator" label="Generator" />
            <NavLink to="/analytics" icon={<BarChart className="mr-1" size={18} />} label="Analytics" />
            <NavLink to="/account" icon={<User className="mr-1" size={18} />} label="Account" />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink: React.FC<{ to: string; icon?: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <Link to={to} className="text-gray-600 hover:text-primary font-medium flex items-center transition duration-300">
    {icon}
    {label}
  </Link>
);

export default Header;