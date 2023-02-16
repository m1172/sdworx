import React, { useState, useContext } from 'react';
import { ReactComponent as RemoveLarge } from '../../../../../assets/icons/removeLarge.svg';

import {
  FlexCenter,
  Icon,
  PopUp,
  PopUpWrapper,
  PopUpTitle,
  PopUpP,
  FlexRelative,
  Button,
} from './popupStyle';

const PopUpPage = () => {
  return (
    <PopUp>
      <PopUpWrapper>
        <FlexRelative>
          <PopUpTitle>Remove Product</PopUpTitle>
          <Icon onClick={() => setCartPopUpOpen(false)}>
            <RemoveLarge />
          </Icon>
        </FlexRelative>
        <FlexCenter>
          <PopUpP>Remove item from cart ?</PopUpP>
        </FlexCenter>
        <Button
          onClick={() => {
            setCartPopUpOpen(false);
            setCheckDeleteCartItem(!checkDeleteCartItem);
          }}
        >
          Remove
        </Button>
        <Button cancel onClick={() => setCartPopUpOpen(false)}>
          Cancel
        </Button>
      </PopUpWrapper>
    </PopUp>
  );
};
export default PopUpPage;
