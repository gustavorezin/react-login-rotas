import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 1rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 1rem 4rem;
  }
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.green};
    font-weight: 700;
  }
`;

export const LinkAuthPages = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};
`;

export const ContainerChildren = styled.div`
  flex: 1;
  padding-top: 3rem;
`;
