import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  #aviso-rota {
    position: absolute;
    top: 6px;
    left: 6px;
    color: ${(props) => props.theme.colors.green};
    font-weight: 700;
  }
`;
