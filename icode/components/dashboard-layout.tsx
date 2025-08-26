import React from 'react';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => router.push('/courses')} className="text-gray-300 hover:text-white">
                Courses
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/profile')} className="text-gray-300 hover:text-white">
                Profile
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/settings')} className="text-gray-300 hover:text-white">
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;