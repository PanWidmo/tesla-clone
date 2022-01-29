import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section/Section';

const Container = styled.div`
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Section title="Model 3" description="Order Online for Touchless Delivery" leftBtnText="Custom order" rightBtnText="Existing inventory" />
      <Section title="Model Y" description="Order Online for Touchless Delivery" leftBtnText="Custom order" rightBtnText="Existing inventory" />
      <Section title="Model S" description="Order Online for Touchless Delivery" leftBtnText="Custom order" rightBtnText="Existing inventory" />
      <Section title="Model X" description="Order Online for Touchless Delivery" leftBtnText="Custom order" rightBtnText="Existing inventory" />
      <Section title="Solar Panels" description="Lowest Cost Solar Panels in America" leftBtnText="Order now" rightBtnText="Learn more" />
      <Section title="Solar Roof" description="Produce Clean Energy From Your Roof" leftBtnText="Order now" rightBtnText="Learn more" />
      <Section title="Accessories" leftBtnText="Ship now" />
    </Container>
  );
};

export default Home;
