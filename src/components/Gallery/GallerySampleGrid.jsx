// Import React Libraries
import React from 'react';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import {
  GridWrapper, GridContainer,
  GridOne, GridTwo, GridThree,
  GridFour, GridFive,
  GridSix, GridSeven,
  CategoryImg

} from '../../utils/style/js/GallerySampleGridStyle';

function GallerySampleGrid () {
  console.log('photosSample');
  console.log(photosSample[0]);
  return (
    <GridWrapper id='gridWrapper'>
      <GridContainer id='gridContainer'>
        <GridOne id='gridOne'>
            <CategoryImg src={photosSample[0].src} alt="img1" />
        </GridOne>
        <GridTwo id='gridTwo'>
            <CategoryImg src={photosSample[1].src} alt="img2" />
        </GridTwo>
        <GridThree id='gridThree'>
            <CategoryImg src={photosSample[2].src} alt="img3" />
        </GridThree>
        <GridFour id='gridFour'>
            <CategoryImg src={photosSample[3].src} alt="img4" />
        </GridFour>
        <GridFive id='gridFive'>
            <CategoryImg src={photosSample[4].src} alt="img5" />
        </GridFive>
        <GridSix id='gridSix'>
            <CategoryImg src={photosSample[5].src} alt="img6" />
        </GridSix>
        <GridSeven id='gridSeven'>
            <CategoryImg src={photosSample[6].src} alt="img7" />
        </GridSeven>
      </GridContainer>
    </GridWrapper>
  );
}

export default GallerySampleGrid;

/*

        */