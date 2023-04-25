import * as S from './styles';
import { socialMedia } from './util';

export const Footer = () => {
  return (
    <S.Container>
      <S.Status>
        <S.DataStatus>characters: 826</S.DataStatus>
        <S.DataStatus>locations: 126</S.DataStatus>
        <S.DataStatus>episodes: 51</S.DataStatus>
      </S.Status>
      <S.SocialIcons>
        {socialMedia.map(social => (
          <S.SocialIconLink href={social.url} key={social.id}>
            <S.SocialLogo src={social.image} alt={social.name} />
          </S.SocialIconLink>
        ))}
      </S.SocialIcons>
      <S.CopyRight>
        © 2023 - By
        <S.CopyRightLink href="https://github.com/humberto0">
          Humberto {'</>'}
        </S.CopyRightLink>
      </S.CopyRight>
    </S.Container>
  );
};
