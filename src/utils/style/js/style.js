// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../colors';

// Import Constants
import {
  horizontalMargin, verticalMargin,
  responsiveWidthMobile, responsiveWidthTablet, headerHeight, headerHeightResponsive, horizontalMarginResponsive, footerHeight
} from '../../constants';

export const PageWrapper = styled.div`
    margin: ${headerHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;

    @media (max-width: ${responsiveWidthTablet}px){
        margin: ${headerHeightResponsive + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
        min-height: ${window.innerHeight - (headerHeightResponsive + verticalMargin * 2 + footerHeight)}px;
    }

    @media (max-width: ${responsiveWidthMobile}px){
        margin: ${headerHeightResponsive * 2 + verticalMargin}px ${horizontalMarginResponsive}px ${verticalMargin}px ${horizontalMarginResponsive}px;
    }
`;

export const commonTitleStyle = css`
  font-family: cursive;
  font-style: italic;
  color: ${colors.title};
`;

export const commonLink = css`
    color: ${colors.link} ;
    text-decoration: none;

    &:hover {
        color: ${colors.linkHover};
    }
`;

export const StyledLinkSidebar = styled(Link)`
    ${commonTitleStyle};
    ${commonLink};
    font-size: 20px;    

    margin-bottom: 10px;
`;

export const StyledH1 = styled.h1`

    ${commonTitleStyle};
    font-size: 30px;

    color: ${colors.title} ;

    text-align: left;
    padding-left: 20px;
`;

export const StyledH2 = styled.h2`
    ${commonTitleStyle};    
    font-size: 25px;

    color: ${colors.title} ;

    text-align:center;

    @media (max-width: ${responsiveWidthMobile}px){
        text-align:center;
    }  
`;

export const StyledH3 = styled.h3`
    ${commonTitleStyle};
    font-size: 25px;

    color: ${colors.title} ;
`;

export const StyledP = styled.p`
    font-size: 15px;
    font-family: Candassa;
    margin: 5px;

    @media (max-width: ${responsiveWidthMobile}px){
        
        padding-left:10px;
      }
`;

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
`;
// Header & Footer
export const commonHeaderFooter = css`
    display: flex;
    width: 100%;

    background: ${colors.backgroundHeaderFooter};
`;
