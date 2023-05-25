import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import NaviBanner from './components/NaviBanner';
import LandingPage  from './components/LandingPage';
import FormFillHH from './components/FormFill_HH';

export default function App() 
{
  return (
    <>
      <header>
        <div className="App-header">
          <NaviBanner />
        </div>
      </header>

       <div className="App-body">
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/Holroyd" element={<FormFillHH />} />
            </Routes>
          </BrowserRouter>
       </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);