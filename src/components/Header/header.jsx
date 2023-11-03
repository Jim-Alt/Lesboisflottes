// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Component
import { LanguageMenu } from '../LanguageMenu/languageMenu'
import Navbar from "../Nav/Navbar";

// Import Style
import styled from 'styled-components'
import { StyledLinkHeader } from '../../utils/style/jsx/links';

import colors from "../../utils/style/jsx/colors";

// Import Constantes
import { borderWidth } from "../../utils/style/jsx/constantes";
import { screenWidth } from "../../utils/style/jsx/constantes";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 15px;
  border: ${borderWidth}px solid black;

  background: ${colors.background};
`

const TitleDiv = styled.div`
  text-align: center;

  border-radius: 15px;
  border: ${borderWidth}px solid black;

  @media (max-width:${screenWidth}px){
    padding-top: 10px;
  }
  
`

const LanguagePickerDiv = styled.div`
  text-align: right;

  margin: 0px;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`

const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin-top: 0px;
  margin-bottom: 5px;
`

const StyledSubtitle = styled.h2`
  font-size: 20px;
  
  margin: 5px;
`



function Header() {

  const { t } = useTranslation();

  return (
      <HeaderWrapper>
        <LanguagePickerDiv>
          <LanguageMenu/>
        </LanguagePickerDiv>
        <TitleDiv>
          <StyledLinkHeader to="/">
            <StyledTitle>{t("mainTitle")}</StyledTitle>
            <StyledSubtitle>{t("subtitle1")}</StyledSubtitle>
            <StyledSubtitle>{t("subtitle2")}</StyledSubtitle>
          </StyledLinkHeader>
        </TitleDiv>
        <div>
          <Navbar/>       
        </div>
        
      </HeaderWrapper>
  )
}

export default Header
// 