import React from 'react';
import {Button} from "../../libs/ui/Button/Button";

const Test = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 20 }}>
        <Button label='Label' variant='orange' as='a' href='#' />
        <Button label='Label' variant='violet' as='a' href='#' />
        <Button label='Label' variant='pink' as='a' href='#' />
        <Button label='Label' variant='red' as='a' href='#' />
        <Button label='Label' variant='yellowDark' as='a' href='#' />
        <Button label='Label' variant='yellow' as='a' href='#' />
      </div>
    </div>
  );
};

export default Test;
