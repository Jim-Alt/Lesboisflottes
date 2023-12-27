// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import CommentItem from '../../components/Comment/comment';
import AverageRatingItem from '../../components/Comment/averageRating';
import CommentPresentation from '../../components/Comment/commentPresentation';

// Import Datas
import { webSitesList } from '../../datas/review_WebSites';

// Import Style
import styled from 'styled-components';
import { PageWrapper, StyledContainer, StyledH1 } from '../../utils/style/js/style';

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Comment () {
  const { i18n, t } = useTranslation();

  // console.log(`language : ${i18n.language}`)

  return (
      <PageWrapper id='commentPageWrapper'>
        <StyledContainer>
          <StyledH1>{t('OurComments')}</StyledH1>
        </StyledContainer>

        <CommentPresentation webSitesList={webSitesList}/>

        {webSitesList.map((webSite) => (
          <CommentListWrapper key={webSite.name} id='commentListWrapperAirBnB'>
            <AverageRatingItem webSite={webSite}/>
            {webSite.reviewList[0][`reviewList${i18n.language}`].map((review, index) => (
              <CommentItem key={index} comment={review} index={index}/>
            ))}
          </CommentListWrapper>
        ))}
      </PageWrapper>
  );
}

export default Comment;
