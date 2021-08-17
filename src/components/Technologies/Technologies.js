import React from 'react';
import { DiFirebase, DiJavascript, DiPython, DiReact, DiZend, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="experience">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            JavaScript/HTML/CSS<br />
            Python<br />
            Java<br />
            C/C++<br />
            C#<br />
            PHP<br />
            SQL<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Frameworks/Libraries</ListTitle>
          <ListParagraph>
            React<br />
            Node.js<br />
            Angular<br />
            Express.js<br />
            Django<br />
            MySQL<br />
            MongoDB<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem"/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git<br />
            AWS<br />
            Firebase<br />
            Linux<br />
            Heroku<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
