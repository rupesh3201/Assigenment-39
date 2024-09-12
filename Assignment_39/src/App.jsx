import React from 'react'

function App() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
  </div>

  )
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

export default App