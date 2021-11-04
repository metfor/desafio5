import { BoxLogo, BoxMidia, HeaderContainer, MyImage, MyLink } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <BoxLogo>
        <MyImage
          className="logo"
          src="/../public/logo.svg"
          alt="logo"
          width="100"
          height="48"
        />
      </BoxLogo>
      <BoxMidia>
        <MyLink href="/">
          <MyImage
            className="facebook"
            src="/../public/facebook.svg"
            alt="facebook"
            width="24"
            height="24"
          />
        </MyLink>
        <MyLink href="/">
          <MyImage
            className="Intagram"
            src="/../public/instagram.svg"
            alt="instagram"
            width="24"
            height="24"
          />
        </MyLink>
        <MyLink href="/">
          <MyImage
            className="twitter"
            src="/../public/twitter.svg"
            alt="twitter"
            width="24"
            height="24"
          />
        </MyLink>
        <MyLink href="/">
          <MyImage
            className="youtube"
            src="/../public/youtube.svg"
            alt="youtube"
            width="24"
            height="24"
          />
        </MyLink>
      </BoxMidia>
    </HeaderContainer>
  );
}
