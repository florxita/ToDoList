import styled from "styled-components";

export const Item = styled.li`
  border: 0.14rem solid ${({ theme }) => theme.colors.secondary};
  border-bottom: none;
  padding: 0.5rem 1rem;
  list-style: none;
  width: 20rem;
  max-width: 70vw;
  min-height: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:last-child {
    border-bottom: 0.14rem solid ${({ theme }) => theme.colors.secondary};
  }
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.secondary};
  }
  p {
    width: 8.5rem;
    flex-grow: 2;
    padding: 0 0.9rem;
    text-align: left;
  }
  .taskCompleted {
    text-decoration: line-through;
    opacity: 70%;
  }
  .container {
    display: flex;
    gap: 0.5rem;
  }
  span {
    color: ${({ theme }) => theme.colors.feature};
  }
`;

export const Check = styled.div`
  display: flex;

  > input {
    opacity: 0;
  }

  > input + label {
    position: absolute;
    display: inline-block;

    &:before {
      content: " ";
      position: absolute;
      width: 0.7rem;
      height: 0.7rem;
      border: 1px solid ${({ theme }) => theme.colors.light};
      background: none;
    }

    &:after {
      content: "✔";
      position: absolute;
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.feature};
      width: 0.7rem;
      height: 0.7rem;
      transition: all 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.1rem;
    }
  }

  > input:not(:checked) + label {
    &:after {
      opacity: 0;
    }
  }
`;
