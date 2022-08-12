import styled from "styled-components";

export const Flex = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexCol = styled.div`
  display: flex;
  align-items: center & > div, & > ul {
    flex: 1;
  }
`;
