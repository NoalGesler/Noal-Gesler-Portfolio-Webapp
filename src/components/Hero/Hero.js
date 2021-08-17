import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Noal Gesler
      </SectionTitle>
      <SectionText>
        Software Engineer
      </SectionText>
      <SectionSubText>Hello, I'm Noal, a Software Engineer and recent Computer Science graduate currently based in Tampa, FL.
        <br /><br />I have a passion for all things computers and software development. I'm currently searching for exciting new opportunities
        in the field of Software Engineering<br /><br />
      </SectionSubText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;