import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.textColor}
`