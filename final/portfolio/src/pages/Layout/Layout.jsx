import React from 'react';
import Footer from '../../components/Footer/Footer';
import { ThemeContext } from '../../lib/ThemeProvider';
import './Layout.css';
import Navbar from '../../components/Navbar/Navbar';

const Layout = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <main>
        <div className={`container container--${theme}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
