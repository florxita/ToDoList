import styled from "styled-components";
import { AddForm } from "./Input.styled";

export const FormContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-top: 0px;
  width: 25rem;
  max-width: 85vw;
  height: 40rem;
  max-height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  ul {
    flex-grow: 2;
    /* overflow-y: scroll; */
  }
  & figure {
    padding-bottom: 1rem;
    position: relative;
    width: 101%;
    height: auto;

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
    margin-bottom: 1.5rem;
  }
  & p,
  span {
    font-family: "Source Sans Pro";
    font-size: 14px;
    font-weight: 400;
  }

  ${AddForm} {
    padding-bottom: 1.5rem;
  }

  ${AddForm} svg {
    font-size: 22px;
    stroke-width: 1px;
  }
`;