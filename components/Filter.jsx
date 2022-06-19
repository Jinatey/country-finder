import { useState } from 'react';
import filterStyles from '../styles/Filter.module.css';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <Menu>
        <MenuButton className={filterStyles.MB}>
          <p>{filter || 'Filter by region'}</p> <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList className={filterStyles.ML}>
          <MenuItem onSelect={() => setFilter('Africa')}>Afica</MenuItem>
          <MenuItem onSelect={() => setFilter('America')}>America</MenuItem>
          <MenuItem onSelect={() => setFilter('Asia')}>Asia</MenuItem>
          <MenuItem onSelect={() => setFilter('Europe')}>Europe</MenuItem>
          <MenuItem onSelect={() => setFilter('Oceania')}>Oceania</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Filter;
