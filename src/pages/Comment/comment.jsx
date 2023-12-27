// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import CommentItem from '../../components/Comment/comment';
import AverageRatingItem from '../../components/Comment/averageRating';
import CommentPresentation from '../../components/Comment/commentPresentation';

// Import Datas
import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr';
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en';
import { commentListFrBooking } from '../../datas/review_Booking_fr';
import { commentListEnBooking } from '../../datas/review_Booking_en';

// Import Style
import styled from 'styled-components';
import { PageWrapper, StyledContainer, StyledH1 } from '../../utils/style/js/style';
import { horizontalMargin, responsiveWidthMobile, responsiveWidthTablet } from '../../utils/constants';

const CommentSitePresentationWrapper = styled.div`
  display: flex;
  gap: ${horizontalMargin}px;

  @media (max-width: ${responsiveWidthTablet}px){
  }
  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction: column;
  }
`;

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Comment () {
  const { i18n, t } = useTranslation();

  // console.log(`language : ${i18n.language}`)

  let reviewsAirBnB = [];
  let reviewsBooking = [];
  if (i18n.language === 'fr') {
    reviewsAirBnB = commentListFrAirBnB.reviews;
    reviewsBooking = commentListFrBooking.reviews;
  } else if (i18n.language === 'en') {
    reviewsAirBnB = commentListEnAirBnB.reviews;
    reviewsBooking = commentListEnBooking.reviews;
  }

  return (
      <PageWrapper id='commentPageWrapper'>
        <StyledContainer>
          <StyledH1>{t('OurComments')}</StyledH1>
        </StyledContainer>
        <CommentSitePresentationWrapper id='commentWebSitePresentationWrapper'>
              <CommentPresentation commentList={commentListFrAirBnB} webSite={'AirBnB'}/>
              <CommentPresentation commentList={commentListFrBooking} webSite={'Booking'}/>
        </CommentSitePresentationWrapper>

        <AverageRatingItem commentList={commentListFrAirBnB} webSite={'AirBnB'}/>
        <CommentListWrapper id='commentListWrapperAirBnB'>
          {reviewsAirBnB.map((review, index) => (
          <CommentItem key={index} comment={review} index={index}/>
          ))}
        </CommentListWrapper>
        <CommentListWrapper id='commentListWrapperAirBooking'>
          <AverageRatingItem commentList={commentListFrBooking} webSite={'Booking'}/>
          {reviewsBooking.map((review, index) => (
          <CommentItem key={index} comment={review} index={index}/>
          ))}
        </CommentListWrapper>
      </PageWrapper>
  );
}

export default Comment;
