import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const FlexCol = styled.div`
  display: flex;
  align-items: center & > div, & > ul {
    flex: 1;
  }
`;
