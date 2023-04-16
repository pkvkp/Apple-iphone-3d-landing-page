import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: var(--dark);
  color: var(--white);
`;

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;


const TextBlockRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;

`

const TextBlockLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;

`

const Title = styled.div`
    font-size:var(--fontlg);
    margin-bottom: 1rem;
`

const Text = styled.div`
     font-size:var(--fontxs);
    margin-bottom: 0.5rem;
    color:var(--greyLight);
    width:55%;
`
const Display = () => {
  return (
    <Section>
      <MainTitle>
        Immersive <br /> Technology
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR Display</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veniam
          doloremque sit natus hic sint. Nostrum quo in, quia quaerat fuga
          doloremque voluptate beatae consequuntur ipsa delectus! Consequatur,
          aut laboriosam?
        </Text>
      </TextBlockRight>
      <TextBlockLeft>
        <Title>Super Retina XDR Display</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veniam
          doloremque sit natus hic sint. Nostrum quo in, quia quaerat fuga
          doloremque voluptate beatae consequuntur ipsa delectus! Consequatur,
          aut laboriosam?
        </Text>
      </TextBlockLeft>
    </Section>
  );
};

export default Display;
