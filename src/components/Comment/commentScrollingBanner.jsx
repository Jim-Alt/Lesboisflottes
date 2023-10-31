import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';

import CommentItem from "./comment";

import { commentListFrAirBnB } from "../../datas/review_AirBNB_fr";
import { commentListEnAirBnB } from "../../datas/review_AirBNB_en";

import styled from 'styled-components'

import { borderWidth } from "../../utils/style/jsx/border";



const CommentContainer = styled.div`
    text-align: left;
    width:100%;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

    



function CommentScrollingBanner(){

  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  console.log(`i18n : ${i18n.language}`);

  const reviews = useMemo(() => {
    if (i18n.language === 'fr') {
      console.log(`review in FRENCH`);
      return commentListFrAirBnB.reviews;
    } else if (i18n.language === 'en') {
      console.log(`review in ENGLISH`);
      return commentListEnAirBnB.reviews;
    } else {
      return [];
    }
  }, [i18n.language]);

  console.log(`reviews : ${reviews}`)

  useEffect(() => {
    if( reviews.length > 0){
      const timer = setInterval(() => {
        // Update the current index to show the next comment
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 8000); // 8 seconds
  
      return () => {
          clearInterval(timer); // Clear the interval on component unmount
        };
    }
    
    }, [reviews]);

    const redirectToComment = (comment) => {
        navigate(`/Comment`);
      };

      console.log(`reviews index : ${reviews[currentIndex]}`)

      if (reviews.length === 0) {
        return null; // Return null or a loading indicator until reviews are available.
      }

  return (
      <div>
        <CommentContainer>
        <button
            onClick={redirectToComment}
            style={{ cursor: "pointer", border: "none", background: "none", padding: 0, textDecoration: "none" }}
        >
            <CommentItem comment={reviews[currentIndex]} />
        </button>

        </CommentContainer>
      </div>
  )
}

export default CommentScrollingBanner

