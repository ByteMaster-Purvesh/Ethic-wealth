import React from 'react';
import PageHeader from '../components/Header/PageHeader';
import Projects from '../components/Main/Projects';
import Footer from '../components/Footer/Footer';

const Project = () => {
  return (
    <main>
      <PageHeader
        title="Projects"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Projects' }
        ]}
      />
      <Projects />
      <Footer />
    </main>
  );
};

export default Project;
