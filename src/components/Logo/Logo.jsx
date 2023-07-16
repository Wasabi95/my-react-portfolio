import React from 'react';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import s from './Logo.module.scss';




const LOGO = {
  logo_name: "<Andrey.C />",
};

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://raw.githubusercontent.com/Wasabi95/NavBar-SideMenu/master/images/cc.png" alt="site logo" />
          <h1 style={{ marginLeft: '10px', fontFamily: 'Montserrat, sans-serif', fontSize: '30px', fontWeight: '900' }}>{LOGO.logo_name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

