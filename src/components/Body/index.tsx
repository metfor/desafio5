import { BsCaretRight } from "react-icons/bs";

import {
  BodyBox,
  BoxButton,
  BoxIcon,
  BoxImg,
  BoxInfos,
  ButtonNow,
  ButtonTrailer,
  Description,
  DivButton,
  MyImage,
  SubTitle,
  Title,
} from "./styled";
export function BodyContainer() {
  return (
    <BodyBox>
      <BoxInfos>
        <Title>HAYAO MIYAZAKI</Title>
        <SubTitle>
          A VIAGEM
          <br />
          DE CHIHIRO
        </SubTitle>
        <Description>
          Chihiro chega a um mundo mágico dominado por
          <br /> uma bruxa. Aqueles que a desobedecem são <br />
          transformados em animais.
        </Description>
        <BoxButton>
          <DivButton>
            <BoxIcon><BsCaretRight /></BoxIcon>
          <ButtonNow>
          
             ASSISTIR AGORA
          </ButtonNow>
          </DivButton>
          <ButtonTrailer>ASSISTA O TRAILER</ButtonTrailer>
        </BoxButton>
      </BoxInfos>
      <BoxImg>
        <MyImage
          className="image"
          src="/../public/image.svg"
          alt="image"
          width="600"
          height="479"
        />
      </BoxImg>
    </BodyBox>
  );
}
