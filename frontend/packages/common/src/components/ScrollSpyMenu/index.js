import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { DrawerContext } from '../../contexts/DrawerContext';
import { LightboxContext } from '../../contexts/LightboxContext';
import { Link } from 'gatsby';

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  const { handleLightbox } = useContext(LightboxContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      {menuItems.map((menu, index) => (
        <>
          {drawerClose ? (
            <li key={`menu-item-`}>
              <Link
                activeStyle={{ color: '#ff4362' }}
                to={menu.path}
                onClick={toggleDrawer}
              >
                {menu.label}
              </Link>
            </li>
          ) : (
            <li key={`menu-item-`}>
              <Link activeStyle={{ color: 'yellow' }} to={menu.path}>
                {menu.label}
              </Link>
            </li>
          )}
        </>
      ))}
      <li>
        <a
          href="#connexion"
          onClick={() => {
            handleLightbox('connexion');
            drawerClose && toggleDrawer();
          }}
        >
          Connexion
        </a>
      </li>
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func
};

ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};

export default ScrollSpyMenu;
