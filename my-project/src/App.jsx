  import React from 'react';
  import Header from './Componentes/Header';
  import Nav from './Componentes/Nav';
  import Main from './Componentes/Main';
  import Footer from './Componentes/Footer';
  import Hero from './Componentes/Hero';
  import Menu from './Page/Menu';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <div className="App">
          <Header />          |

          <Routes>
            <Route path="/" element={<><Hero /> <Main /></>} />
            <Route path="/menu" element={<><Menu /></>} />
          </Routes>
          <Footer />
      </div>
    </Router>
    );
  }

  export default App;
  