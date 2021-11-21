import React from 'react';
import Button from '../assets/Button';
import styled from 'styled-components';

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;

  .download:hover {
    background: green;
  }
`;

const ActionButtons = () => {
  return (
    <StyledButtons>
      <Button className="download" type="submit" text="Download PDF" />
    </StyledButtons>
  )
}

export default ActionButtons;