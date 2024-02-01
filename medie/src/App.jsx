import React from 'react';
import { MainLayout } from './layout/Mainlayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Camppage } from './pages/Campage/Camppage';
import { Eventpage } from './pages/Eventpage/Eventpage';
import { Infopage } from './pages/Infopage/Infopage';
import { Ticketpage } from './pages/Ticketpage/Ticketpage';
import { Loginpage } from './pages/Loginpage/Loginpage';
import { TicketCheckoutpage } from "./pages/TicketCheckoutpage/TicketCheckoutpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/forside" element={<Frontpage />} />
            <Route path="/events" element={<Eventpage />} />
            <Route path="/camps" element={<Camppage />} />
            <Route path="/info" element={<Infopage />} />
            <Route path="/billetter" element={<Ticketpage />} />
            <Route
              path="/billetter/checkout/:id"
              element={<TicketCheckoutpage />}
            />
            <Route path="/login" element={<Loginpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

