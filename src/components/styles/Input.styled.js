import styled from "styled-components";

export const AddForm = styled.form`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: right;
  align-items: center;
  bottom: 2rem;

  button {
    background: ${({ theme }) => theme.colors.feature};
    position: absolute;
    color: #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    border-style: none;
    cursor: pointer;
    pointer-events: painted;

    &:focus ~ input {
      width: 340px;
      max-width: 80vw;
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    }
  }
  input {
    color: ${({ theme }) => theme.colors.main};
    /* background-color: ${({ theme }) => theme.colors.light}; */
    border: solid 0.05rem ${({ theme }) => theme.colors.secondary};
    border-radius: 50px;
    font-size: 16px;
    padding: 1rem;
    height: 2rem;
    width: 1.5rem;
    font-size: 12px;
    outline: none;
    transition: all 0.5s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 14px;
      font-weight: 100;
    }

    &:focus {
      outline: none;
      width: 340px;
      max-width: 80vw;
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    }
  }
`;
