import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledLinkSidebar } from '../../utils/style/jsx/links';

import colors from "../../utils/style/jsx/colors";

import { borderWidth } from "../../utils/style/jsx/border";

const SidebarWrapper = styled.div`
  background: ${colors.background};

  height: 100%;
  min-width: 125px;
  border-radius: 15px;
  border: ${borderWidth}px solid black;
`

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px; 
`



function Sidebar() {

    const { t } = useTranslation();

    return (
        <SidebarWrapper>
            <SidebarLinks>
                <StyledLinkSidebar to="/">{t("Reception")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Location">{t("Location")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Housing">{t("Housing")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Gallery">{t("Gallery")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Comment">{t("Comments")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Pricing">{t("Prices")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Contact">{t("Contact")}</StyledLinkSidebar>
            </SidebarLinks>
        </SidebarWrapper>
    )
  }
  
  export default Sidebar