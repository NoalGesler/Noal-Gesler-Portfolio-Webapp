import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, EdSubText3, CarouselItemText, CarouselItemTitle, EdSubText2, CarouselMobileScrollNode, ct2, EdLocText, EdSubText, EdText } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {
  return (
      <Section id="education">
      <SectionDivider /><br />
      <SectionTitle>Education</SectionTitle>
      <br />
      <EdText>Bachelor of Science, Computer Science<br /></EdText>
      <div>
      <EdSubText>Florida State University | Tallahassee, FL</EdSubText>
      <EdLocText>August 2017 - April 2021</EdLocText>
      </div>
      <EdSubText>GPA: 3.33<br /><br /></EdSubText>
      <EdText>Relevant Courses:</EdText>
      <br />
      <div>
      <EdSubText2>Software Engineering</EdSubText2>
      <EdSubText3>Advanced Java Programming</EdSubText3></div><div>
      <EdSubText2>Advanced Python Programming</EdSubText2>
      <EdSubText3>Object-Oriented Programming</EdSubText3></div><div>
      <EdSubText2>Data Structures</EdSubText2>
      <EdSubText3>Databases</EdSubText3></div><div>
      <EdSubText2>Programming Languages</EdSubText2>
      <EdSubText3>Algorithm Analysis</EdSubText3></div><div>
      <EdSubText2>Network Security</EdSubText2>
      <EdSubText3>Mobile Programming</EdSubText3></div>
      <EdSubText2>Computer Organization</EdSubText2>
    </Section>
  );
};

export default Timeline;
