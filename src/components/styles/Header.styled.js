import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.textColor}
`