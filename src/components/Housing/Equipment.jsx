import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/titles&text';


const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Avantgarde;

    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: 1px solid black;
`

const StyledSubTitle = styled.h2`
    font-family: Brordlay Hand;
`

function EquipmentList() {

    const { t } = useTranslation();

  return (
    <div>
      <StyledH1>{t("TheDifferentEquipments")}</StyledH1>
      <ListWrapper>
      <StyledSubTitle>{t("Indoor")}</StyledSubTitle>
      <ul>
        <li>{t("Coffeemaker")}</li>
        <li>{t("ElectricKettle")}</li>
        <li>{t("Refrigerator")}</li>
        <li>{t("Microwave")}</li>
        <li>{t("HairDryer")}</li>
        <li>{t("Wardrobe")}</li>
        <li>{t("Fan")}</li>
        <li>{t("MosquitoRepellentPlug")}</li>
      </ul>
      <StyledSubTitle>{t("Outdoor")}</StyledSubTitle>
      <ul>
        <li>{t("Sunshade")}</li>
        <li>{t("ElectricKettle")}</li>
        <li>{t("PetanqueBall")}</li>
        <li>{t("Molky")}</li>
        <li>{t("VintageBicycle")}</li>
      </ul>
    </ListWrapper>
    </div>
    
  )
}

export default EquipmentList
