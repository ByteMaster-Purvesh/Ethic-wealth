import React from 'react';
import PageHeader from '../components/Header/PageHeader';
import TestimonialSection from '../components/Main/Testimonial';
import Footer from '../components/Footer/Footer';

const Testimonial = () => {
  return (
    <main>
      <PageHeader
        title="Testimonial"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Testimonial' }
        ]}
      />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default Testimonial;
