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
`;

export const LinkAuthPages = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -1px;
    left: 0;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.red};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ContainerChildren = styled.div`
  flex: 1;
  padding-top: 3rem;
`;
