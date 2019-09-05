import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;

    button {
      padding: 12px 20px;
      border: 0;
      color: #fff;
      background: #7159c1;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductList = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
  }

  div {
    display: flex;
    align-items: center;

    input {
      padding: 5px;
      width: 40px;
      margin: 0 3px;
      text-align: center;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 14px;
    color: #999;
    font-weight: bold;
    margin-right: 5px;
  }
  strong {
    font-size: 25px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin: 10px auto;
  }

  text {
    font-size: 30px;
    font-weight: bold;
    color: #999;
  }
`;
