import styled from "styled-components";

export const TrackCardContainer = styled.div`
  border-style: solid;
  border-color: black;
  background-color: ${({theme}) => theme.colors.backgroundColor};

  p {
    text-align: center;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
  }

  img {
    display: block;
    margin: auto;
  }

`

