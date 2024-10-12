import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Paintbrush, BarChart3, Lock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-primary to-accent text-white py-20 px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to QR Code Generator</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Create, customize, and track your QR codes with ease. Perfect for businesses and individuals alike.</p>
        <Link to="/generator" className="btn-primary text-lg px-8 py-3">
          Create Your QR Code Now
        </Link>
      </div>
      <div className="container mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<QrCode size={40} />}
            title="Multiple Content Types"
            description="Generate QR codes for URLs, text, email, phone, WiFi, and more"
          />
          <FeatureCard
            icon={<Paintbrush size={40} />}
            title="Customization Options"
            description="Personalize your QR codes with colors, shapes, and logos"
          />
          <FeatureCard
            icon={<BarChart3 size={40} />}
            title="Advanced Analytics"
            description="Track scans, locations, and user engagement with your QR codes"
          />
          <FeatureCard
            icon={<Lock size={40} />}
            title="Secure & Dynamic"
            description="Create password-protected and editable dynamic QR codes"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="card hover:shadow-lg transition duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;