import React, {FC} from 'react';
import styles from './burgerMenu.module.css';
import {combineClasses} from "../../utils/combineClasses";

type Props = {
  onClick: () => void
  isOpen: boolean
}

export const BurgerMenu: FC<Props> = ({ onClick, isOpen }) => {
  const classes = combineClasses(styles.navIcon, isOpen && styles.open)

  return (
    <div className={classes} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};
