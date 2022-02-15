import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import styled from 'styled-components';
import { work } from '../../Store/Data/Works';
import { IPage } from '../../Store/Type/Interfaces';
import Footer from './Footer';
import ModalDraw from './Modal/ModalDraw';
import ModalNoItem from './Modal/ModalNoItem';
import SelectOption from './SelectOption';

const PageContainer = ({ page, title, author, contents, isVisibleOption }: IPage) => {
  return (
    <PageContainer_styled isVisibleOption={isVisibleOption}>
      {title && <h4 className="title">{title}</h4>}
      {author && <span className="author">{author}</span>}
      <div className="contentsBox">
        {contents.map((paragraph, idx) => (
          <p key={idx}>
            {paragraph}
            <br />
            <br />
          </p>
        ))}
      </div>
    </PageContainer_styled>
  );
};

const PageContainer_styled = styled.section<{ isVisibleOption: boolean }>`
  font-family: 'NanumMyeongjo';
  ${({ theme }) => theme.mixin.textStyle.B_14}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: ${(props) => (props.isVisibleOption ? '450px' : '0')};
  .title {
    ${({ theme }) => theme.mixin.textStyle.EB_20}
  }
  .author {
    margin-top: 16px;
    margin-bottom: 130px;
  }
  .contentsBox {
    p {
      line-height: 1.4;
      word-break: keep-all;
    }
  }
`;

const Viewer = () => {
  const [nowPage, setNowPage] = useState(1);

  const { page, title, author, contents, isVisibleOption } = work[nowPage - 1];

  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/work/viewer');
  };
  return (
    <>
      <Container>
        <PageContainer
          page={page}
          title={title}
          author={author}
          contents={contents}
          isVisibleOption={isVisibleOption}
        />
      </Container>
      {isVisibleOption && <SelectOption />}
      <Footer
        movePrev={() => {
          if (nowPage < 2) return;
          setNowPage((current) => current - 1);
        }}
        moveNext={() => {
          if (nowPage > work.length - 1) return;
          setNowPage((current) => current + 1);
        }}
      />
      <Routes>
        <Route path="/noitem" element={<ModalNoItem closeModal={closeModal} />} />
        <Route path="/draw" element={<ModalDraw closeModal={closeModal} />} />
      </Routes>
    </>
  );
};

export default Viewer;

const Container = styled.div`
  padding: 0 33px;
  ${({ theme }) => theme.mixin.paddingTopBottom}
  background-color: ${({ theme }) => theme.variable.colors.A_FFF};
  color: ${({ theme }) => theme.variable.colors.black_color};
  min-height: 100vh;
  .title {
  }
`;
