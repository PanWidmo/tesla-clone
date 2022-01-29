import React from 'react';
import styled from 'styled-components';
import imgModel3 from 'assets/images/model-3.jpg';
import downArrow from 'assets/images/down-arrow.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imgModel3});
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

const Section = () => {
  return (
    <Wrapper>
      <ItemText>
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src={downArrow} />
      </Buttons>
    </Wrapper>
  );
};

export default Section;
