import styled from 'styled-components';
import { darken } from 'polished';

export const ProductsList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 250px;
    }
    > strong {
      font-size: 14px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      margin: 5px 0 10px;
      font-weight: bold;
    }

    button {
      background: #7159c1;
      margin-top: auto;
      border-radius: 5px;
      color: #fff;
      overflow: hidden;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 10px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }
      span {
        margin-left: 10px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
