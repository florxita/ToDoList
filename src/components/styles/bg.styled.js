import styled from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const Shape = styled.span`
  max-width: 25rem;
  width: 35vw;
  height: 20vh;
  background: ${({ theme }) => theme.colors.feature};
  position: fixed;
  transition: all 0.5s ease;
  z-index: 1;

  &:first-of-type {
    border-radius: 50% 0% 80% 70% / 50% 0% 55% 100%;
    right: -2.5em;
    &:before {
      content: url(assets/garabato_1.svg);
      position: relative;
      top: 2rem;
      right: 3rem;
    }
    &:after {
      content: url(assets/lunares.svg);
      position: relative;
      top: 6rem;
      right: -4rem;
    }
  }
  &:last-of-type {
    border-radius: 32% 78% 28% 0% / 47% 67% 33% 53%;
    left: -1rem;
    bottom: -2rem;
    &:before {
      content: url(assets/garabato.svg);
      position: relative;
      bottom: -4rem;
      left: 7rem;
    }
    &:after {
      content: url(assets/lunares.svg);
      position: relative;
      bottom: 10rem;
      left: -2.5rem;
    }
  }

  @media ${devices.tablet} {
    height: 25rem;

    &:first-of-type {
      right: -5.5em;

      &:after {
        top: 50%;
        right: -60%;
      }
    }

    &:last-of-type {
      left: -2rem;
      bottom: -5rem;
      &:before {
        bottom: -60%;
        left: 90%;
      }
      &:after {
        bottom: 10rem;
        left: -4.5rem;
      }
    }
  }
  @media ${devices.mobileL} {
    &:last-of-type:after {
      bottom: 8rem;
      left: -5rem;
    }
    &:first-of-type:after {
      right: -45%;
    }
  }
`;

export const Bg = styled.div`
  width: 100%;
  height: auto;
`;
