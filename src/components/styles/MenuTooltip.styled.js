import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  align-self: flex-end;
  justify-self: right;
  transform: translate(235%, -40%);
`;

export const TooltipBox = styled.span`
  font-family: "Lato";
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.feature};
  font-size: 12px;
  letter-spacing: 0.01em;
  font-weight: 400;
  width: 6rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:before {
    content: " ";
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.feature} transparent transparent
      transparent;
    position: absolute;
    z-index: 100;
    top: 100%;
    left: calc(50% - 4.5px);
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`;

export const CloseX = styled.button`
  position: relative;
  color: #fff;
  cursor: pointer;
  font: 9px;
  background: none;
  border: none;

  &:before {
    content: "✕";
    font-size: 10px;
    font-weight: 900;
    line-height: 0px;
  }
`;
