import React from 'react';
import { MainLayout } from './layout/Mainlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Camppage } from './pages/Camppage';
import { Eventpage } from './pages/Eventpage';
import { Infopage } from './pages/Infopage';
import { Ticketpage } from './pages/Ticketpage';
import { Loginpage } from './pages/Loginpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path="/forside" element={<Frontpage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/camps" element={<Camppage />} />
          <Route path="/info" element={<Infopage />} />
          <Route path="/billetter" element={<Ticketpage />} />
          <Route path="/login" element={<Loginpage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

