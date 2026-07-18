import React from 'react';
import PageHeader from '../components/Header/PageHeader';
import Team from '../components/Main/Team';
import Footer from '../components/Footer/Footer';

const TeamMember = () => {
  return (
    <main>
      <PageHeader
        title="Team Member"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pages' },
          { label: 'Team Member' }
        ]}
      />
      <Team />
      <Footer />
    </main>
  );
};

export default TeamMember;
