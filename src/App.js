import React from 'react';
import Header from './components/Header';
import Banner from './components/Banners';
import ServicesExperience from './components/ServicesExperience';
import Projects from './components/Projects';
import ContactMe from './components/ContectMe';
import Footer from './components/Foter';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ServicesExperience />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
