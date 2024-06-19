import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h1 {
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid #333333;
  border-radius: 0.5rem;
  border-collapse: collapse;
  background-color: #1e1e1e;
  overflow: hidden;

  th {
    background-color: #333333;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    color: #d3d3d3;
  }

  .is-admin {
    color: ${(props) => props.theme.colors.green};
  }

  .not-admin {
    color: ${(props) => props.theme.colors.red};
  }

  td:nth-child(2) {
    width: 70%;
  }

  td:nth-child(3) {
    width: 10%;
  }

  tr:nth-child(even) {
    background-color: #2b2b2b;
  }

  tr:nth-child(odd) {
    background-color: #1e1e1e;
  }

  tr:hover {
    background-color: #3c3c3c;
  }
`;

export const ButtonPassword = styled.button`
  display: flex;
  gap: 0.25rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #d3d3d3;
`;

export const ButtonDelete = styled.button`
  display: flex;
  text-decoration: none;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.textPrimary};

  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 0.25rem;
  transition: 0.3s ease;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.red};
  }

  &:disabled {
    background-color: #555;
    border-color: #777;
    color: #999;
    cursor: not-allowed;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  gap: 1rem;
`;
