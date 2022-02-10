import React from 'react';
import styled from 'styled-components';
import { INovel } from '../../Store/Type/Interfaces';

const NovelCard = ({ title, author, genre, items, image }: INovel) => {
  return (
    <Container>
      <div className="image"></div>
      <div className="contents">
        <h4 className="title">{title}</h4>
        <span className="author">{author}</span>
        <div className="inlineBox">
          <span className="genre">#{genre}</span>
          <ul className="items">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default NovelCard;

const Container = styled.article`
  display: grid;
  grid-template-columns: 50px auto;
  grid-column-gap: 18px;
  height: 70px;
  ${({ theme }) => theme.mixin.textStyle.R_11}
  .image {
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .contents {
    border-bottom: 1px solid #888;
    display: flex;
    flex-direction: column;
    .title {
      ${({ theme }) => theme.mixin.textStyle.M_13}
      padding-top: 5px;
    }
    .author {
      display: block;
      margin-top: 7px;
      color: #9193aa;
    }
    .inlineBox {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .genre {
        display: flex;
        padding-top: 3px;
        align-items: center;
      }
      .items {
        margin-left: 8px;
        display: flex;
        li {
          height: 19px;
          ${({ theme }) => theme.mixin.flexAlignCenter}
          background-color: #429f7a;
          border-radius: 9px;
          padding: 0 7px;
          padding-top: 3px;
          &:not(:first-child) {
            margin-left: 6px;
          }
        }
      }
    }
  }
`;
