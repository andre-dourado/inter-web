import React from 'react';

import { Container } from './styles';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Container type="button" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
};

export default MenuButton;
