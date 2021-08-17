import React from 'react';
import { DiPhonegap } from 'react-icons/di';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const Acomplishments = () => (
  <div>
    <Section id="contact">
      <SectionDivider />
      <br />
      <SectionTitle>Contact Me</SectionTitle><br />
      <SectionText>Phone: (727)-271-4538 <AiOutlinePhone></AiOutlinePhone></SectionText>
      <SectionText>E-mail: noalgesler@gmail.com <AiOutlineMail></AiOutlineMail></SectionText>
    </Section>
  </div>
);

export default Acomplishments;
