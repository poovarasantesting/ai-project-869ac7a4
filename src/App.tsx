import React from 'react';
import { Calculator } from './components/Calculator/Calculator';
import { ThemeProvider } from './components/ui/theme-provider';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">React Calculator</h1>
        <Calculator />
      </div>
    </ThemeProvider>
  );
}

export default App;