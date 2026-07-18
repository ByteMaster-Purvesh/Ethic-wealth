import React from 'react';
import PageHeader from '../components/Header/PageHeader';
import WhyChooseUs from '../components/Main/WhyChooseUs';
import Footer from '../components/Footer/Footer';

const Feature = () => {
  return (
    <main>
      <PageHeader
        title="Features"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Features' }
        ]}
      />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default Feature;
