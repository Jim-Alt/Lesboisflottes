// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropType
import PropTypes from 'prop-types';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Style
import styled from 'styled-components';
import { StyledLinkSidebar } from '../../utils/style/js/LinkStyle';

// Import Colors
import colors from '../../utils/style/colors';

// Import constantes
import { responsiveWidthTablet } from '../../utils/constants';

const StyledUl = styled.ul`

    
    display: flex;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    color: ${colors.link};
    padding:0;


    @media (max-width: ${responsiveWidthTablet}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 150px;
        margin-top: 0;
        padding-top: 3rem;
        padding-left: 3.5rem;
        text-align: left;
        
        gap:1rem;
        

        justify-content: top-start;
        
        

        background: #ffffff;

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
       li{
            margin-bottom: 0px;
       }
    }
`;

function SideNav ({ open, handleCloseBurger }) {
  const { t } = useTranslation();

  function handleLinkClick () {
    scrollToTop();
    handleCloseBurger();
  }

  return (
        <StyledUl open={open}>
            <li><StyledLinkSidebar to="/" onClick={handleLinkClick}>{t('Reception')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Location" onClick={handleLinkClick}>{t('Location')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Housing" onClick={handleLinkClick}>{t('Housing')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Gallery" onClick={handleLinkClick}>{t('Gallery')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Comment" onClick={handleLinkClick}>{t('Comments')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Pricing" onClick={handleLinkClick}>{t('Prices')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Contact" onClick={handleLinkClick}>{t('Contact')}</StyledLinkSidebar></li>
        </StyledUl>
  );
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default SideNav;
