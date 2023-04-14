import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.textColor};

  a:hover {
    font-size: 1.3rem;
  }


`