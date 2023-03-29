import styled from "styled-components";

export const StyledAddTrackForm = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  
  input {
    display: block;
    font-size:11px;
    padding:4px 2px;
    border:solid 1px #aacfe4;
    width:200px;
    margin:2px 0 20px 10px;
  }
`