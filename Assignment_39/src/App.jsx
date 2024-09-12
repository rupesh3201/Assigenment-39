import React from 'react';
import './App.css'; // For external styles
 // Create this file for external styles

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const Header = () => {
  // Inline styling
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  };
  return <header style={headerStyle}>This is the Header</header>;
};

const Content = () => {
  return (
    <section className="content-section">
      This is the Content Section
    </section>
  );
};

const Footer = () => {
  return <footer className="footer">This is the Footer</footer>;
};

export default App;
