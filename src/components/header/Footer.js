/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Anchor from '../commons/Anchor';
import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import Nav from './Nav';
import Navmenus from './Navmenus';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
import { OWNER, REPO, WEB_URL } from '../../api/constants';
import RepoNotification from '../commons/RepoNotification';
import FooterMenu from './FooterMenu';

const FooterValve = [
  {
    name: 'Code',
  },
  {
    name: 'Issues',
  },
  {
    name: 'Pull Requests',
  },
  {
    name: 'Action',
  },
  {
    name: 'Projects', 
  },
  
  {
    name: 'Wiki',
  },
  {
    name: 'Security', 
  },
  {
    name: 'Insights',
  },
  
];



const Footer = ({
 
  stargazers_count,
  
  forks_count,
}) => (
  <Nav>
    <FooterMenu >
    {
        FooterValve.map(item => (
         <p style={{ width:"150px", padding:"20px" }}><a href="#">{item.name}</a></p>
        ))
      }
    </FooterMenu>
      
    
   
  </Nav>
);

export default Footer;

