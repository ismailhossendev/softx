import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/route';



function App() {


  return (
    <div data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
