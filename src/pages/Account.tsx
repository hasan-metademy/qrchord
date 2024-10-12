import React, { useState } from 'react';
import { User, Settings, CreditCard, Key } from 'lucide-react';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'subscription':
        return <SubscriptionTab />;
      case 'security':
        return <SecurityTab />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === 'profile' ? 'border-b-2 border-blue-500 font-semibold' : ''
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="inline-block mr-2" />
            Profile
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === 'subscription' ? 'border-b-2 border-blue-500 font-semibold' : ''
            }`}
            onClick={() => setActiveTab('subscription')}
          >
            <CreditCard className="inline-block mr-2" />
            Subscription
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === 'security' ? 'border-b-2 border-blue-500 font-semibold' : ''
            }`}
            onClick={() => setActiveTab('security')}
          >
            <Key className="inline-block mr-2" />
            Security
          </button>
        </div>
        <div className="p-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

const ProfileTab: React.FC = () => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded-md"
          defaultValue="John Doe"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          defaultValue="john@example.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="w-full p-2 border border-gray-300 rounded-md"
          defaultValue="Acme Inc."
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Save Changes
      </button>
    </form>
  );
};

const SubscriptionTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Current Plan: Pro</h2>
      <p className="mb-4">Your subscription renews on July 1, 2023</p>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="font-semibold mb-2">Plan Features:</h3>
        <ul className="list-disc list-inside">
          <li>Unlimited QR codes</li>
          <li>Advanced analytics</li>
          <li>Custom branding</li>
          <li>API access</li>
        </ul>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2">
        Upgrade Plan
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
        Cancel Subscription
      </button>
    </div>
  );
};

const SecurityTab: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Update Password
        </button>
      </form>
      <hr className="my-6" />
      <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication</h2>
      <p className="mb-4">Enhance your account security by enabling two-factor authentication.</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
        Enable 2FA
      </button>
    </div>
  );
};

export default Account;