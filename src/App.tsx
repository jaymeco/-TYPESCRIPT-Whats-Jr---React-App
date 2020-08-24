import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './routes/auth.routes';
import GlobalStyles from './assets/styles/global';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default App;
