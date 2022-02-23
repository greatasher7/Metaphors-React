import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postNovelEpisode } from '../../Api';
import { userInfoAtom } from '../../Store/Atoms';
import { INovelEpisode } from '../../Store/Type/Interfaces';
import Footer from './Footer';
import SelectOption from './SelectOption';
import PageContainer from './PageContainer';

const Viewer = () => {
  const [nowPage, setNowPage] = useState(1);
  const [userinfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [episodeData, setEpisodeData] = useState<INovelEpisode>();

  const params = useParams();

  const goNext = (num: number) => {
    setNowPage((prev) => prev + num);
  };

  useEffect(() => {
    try {
      params.id &&
        postNovelEpisode(userinfo.accessToken, parseInt(params.id)).then((res) => {
          console.log(res);
          setEpisodeData(res.content);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    console.log('epidata', episodeData);
  }, [episodeData]);

  return (
    <>
      <Container>
        <PageContainer
          title={episodeData?.name}
          author={episodeData?.author}
          contents={episodeData?.pages[nowPage - 1].content}
          isVisibleOption={episodeData?.pages[nowPage - 1].hasChoice}
          isLastPage={episodeData?.pages[nowPage - 1].context !== ''}
          isFirstPage={nowPage === 1}
        />
      </Container>
      {episodeData?.pages[nowPage - 1].hasChoice && (
        <SelectOption novelId={episodeData.novelId} goNext={goNext} />
      )}
      <Footer
        movePrev={() => {
          if (nowPage === 1) return;
          setNowPage((current) => current - 1);
        }}
        moveNext={() => {
          if (episodeData?.pages[nowPage - 1].context !== '') return;
          setNowPage((current) => current + 1);
        }}
        isLastPage={episodeData?.pages[nowPage - 1].context !== ''}
        isFirstPage={nowPage === 1}
        haschoice={episodeData?.pages[nowPage - 1].hasChoice}
      />
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
