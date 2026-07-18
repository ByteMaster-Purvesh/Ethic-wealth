import React from 'react';
import PageHeader from '../Header/PageHeader';
import Services from './Services';
import Callback from './Callback';
import Projects from './Projects';
import Footer from '../Footer/Footer';

const Server = () => {
  return (
    <main>
      <PageHeader 
        title="Services" 
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Services' }
        ]} 
      />
      <Services />
      <Callback />
      <Projects />
      <Footer />
    </main>
  );
};

export default Server;
