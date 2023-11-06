// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Style
import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import colors from '../../../utils/style/jsx/colors'

// Import Constante
import { borderWidth } from "../../../utils/style/jsx/constantes";

const SeasonLegendWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const LegendTable = styled.table`
    border-radius: 15px;
    padding: 10px;
    border-spacing: 5px 10px;
    border: ${borderWidth}px solid black;

`

const LegendTDCell = styled.td`
    padding: 5px;
    border: ${borderWidth}px solid black;
    border-radius: 5px;
    text-align:left;
`

function SeasonLegend() {

    const { t } = useTranslation();

  return (
      <SeasonLegendWrapper>
        <StyledH2>{t("Legend")}</StyledH2>
        <div>
            <LegendTable>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.lowSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("LowSeason")}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.mediumSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("MediumSeason")}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.highSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("HighSeason")}</LegendTDCell>
                </tr>
            </LegendTable>
        </div>
      </SeasonLegendWrapper>
  )
}

export default SeasonLegend
