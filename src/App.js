import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been activated', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('dark mode has been activated', 'success');
    }
  };

  return (
    <Router>
      <>
        <Navbar title="Textutils" about="About Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={Mode} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
