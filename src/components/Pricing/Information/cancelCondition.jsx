import styled from 'styled-components'
import { useTranslation } from "react-i18next"

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    margin-left: 0;

    border-radius: 15px;
    border: 1px solid black;
`



function CancelCondition() {

    const { t } = useTranslation();

  return (
      <CancelConditionContainer>
        <h3>{t("cancelConditionTitle")}</h3>
        <p>{t("cancelConditionText")}</p>
      </CancelConditionContainer>
  )
}

export default CancelCondition
