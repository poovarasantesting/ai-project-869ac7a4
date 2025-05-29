import React from 'react';
import LoginForm from './components/LoginForm';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <LoginForm />
      <Toaster />
    </main>
  );
}

export default App;