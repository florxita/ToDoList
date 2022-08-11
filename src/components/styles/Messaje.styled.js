import styled from "styled-components";

export const ErrorBg = styled.div`
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  position: fixed;
  z-index: 101;
  background: ${({ theme }) => theme.colors.darkTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`;

export const Messaje = styled.div`
  background: ${({ theme }) => theme.colors.light};
  width: 19rem;
  height: 12rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.7rem;

  p {
    font-size: 17px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.dark};
  }
  span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 12px;
    text-transform: uppercase;
    /* padding: 0.5rem 0; */
  }
  button {
    width: 70%;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.5px;
    background: ${({ theme }) => theme.colors.main};
    border: none;
    padding: 0.75rem;
    border-radius: 0.35rem;
    /* margin-top: 1rem; */
  }
`;
