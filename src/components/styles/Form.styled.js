import styled from "styled-components";
import { AddForm } from "./Input.styled";

export const FormContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-top: 0px;
  width: 25rem;
  max-width: 85vw;
  height: 37rem;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  ul {
    flex-grow: 2;
  }
  & figure {
    padding-bottom: 1rem;
    position: relative;
    width: 102%;

    & img {
      aspect-ratio: 4/0;
      object-fit: contain;
      width: 100%;
    }
  }

  & h1 {
    font-size: 25px;
    letter-spacing: 0.5px;
    font-weight: 700;
    font-family: "Poppins";
    margin: 1.5rem 0;
  }
  & p,
  span {
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-weight: 400;
  }

  ${AddForm} {
    padding-bottom: 1.5rem;
  }

  ${AddForm} svg {
    font-size: 22px;
    stroke-width: 1px;
  }
  .noTaskMessaje {
    padding: 5rem 0;
    font-size: 18px;
    font-weight: 300;
    flex-grow: 2;
  }
`;
