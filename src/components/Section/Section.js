import React from 'react';
import styled from 'styled-components';
import imgModel3 from 'assets/images/model-3.jpg';
import imgModelY from 'assets/images/model-y.jpg';
import imgModelS from 'assets/images/model-s.jpg';
import imgModelX from 'assets/images/model-x.jpg';
import imgSolarPanels from 'assets/images/solar-panel.jpg';
import imgSolarRoof from 'assets/images/solar-roof.jpg';
import imgAccessories from 'assets/images/accessories.jpg';
import downArrow from 'assets/images/down-arrow.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ title }) => {
    if (title === 'Model 3') return `url(${imgModel3})`;
    if (title === 'Model Y') return `url(${imgModelY})`;
    if (title === 'Model S') return `url(${imgModelS})`;
    if (title === 'Model X') return `url(${imgModelX})`;
    if (title === 'Solar Panels') return `url(${imgSolarPanels})`;
    if (title === 'Solar Roof') return `url(${imgSolarRoof})`;
    if (title === 'Accessories') return `url(${imgAccessories})`;
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.95;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Section = ({ title, description, leftBtnText, rightBtnText }) => {
  return (
    <Wrapper title={title}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src={downArrow} />
      </Buttons>
    </Wrapper>
  );
};

export default Section;
