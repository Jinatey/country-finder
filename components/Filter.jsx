import React from 'react';
import filterStyles from '../styles/Filter.module.css';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button';
import '@reach/menu-button/styles.css';

const Filter = () => {
  return (
    <>
      <Menu>
        <MenuButton className={filterStyles.MB} >
          <p>Filter by region</p> <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList className={filterStyles.ML}>
          <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
          <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
          <MenuItem onSelect={() => alert('Mark as Draft')}>
            Mark as Draft
          </MenuItem>
          <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
          <MenuLink as='a' href='https://reacttraining.com/workshops/'>
            Attend a Workshop
          </MenuLink>
        </MenuList>
      </Menu>
    </>
  );
};

export default Filter;
