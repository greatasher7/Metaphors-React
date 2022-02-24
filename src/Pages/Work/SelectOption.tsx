import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { INovelChoice, INovelItem } from '../../Store/Type/Interfaces';
import { postItem, postUseItem } from '../../Api';
import { useRecoilState } from 'recoil';
import { userInfoAtom, optionTriggerAtom } from '../../Store/Atoms';
import ModalDraw from './Modal/ModalDraw';
import ModalNoItem from './Modal/ModalNoItem';
import ModalUseItem from './Modal/ModalUseItem';
import Loading from '../../Components/Loading';

const SelectOption = ({ novelId, goNext }: { novelId: number; goNext: (num: number) => void }) => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState<INovelChoice[]>();
  const [items, setItems] = useState<INovelItem[]>();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [optionTrigger, setOptionTrigger] = useRecoilState(optionTriggerAtom);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    postItem(userInfo.accessToken, novelId).then((res) => {
      setChoice(res.content.choice);
      setItems(res.content.items);
    });
  }, [optionTrigger]);

  const handleClick = (
    isOwn: boolean,
    isSale: boolean,
    item: string | undefined,
    next: string | undefined,
    idx: number
  ) => {
    if (isOwn && !isSale) {
      // 아이템 가지고 있으면, 사용 api, 다음 페이지로 넘어가기
      setIsLoading(true);
      postUseItem(userInfo.accessToken, novelId, next, item).then((res) => {
        setIsLoading(false);
        goNext(idx + 1);
      });
    } else {
      // 없으면, 모달창 띄우기
      navigate(`/work/viewer/${item}/noitem`);
    }
  };

  const closeModal = () => {
    navigate(`/work/viewer/${novelId}`);
  };

  return (
    <>
      <SelectContainer>
        {choice &&
          choice.map((option, idx) => {
            return (
              <List
                key={idx}
                isOwn={items && items[idx].id === '' ? false : true}
                isSale={items && parseInt(items[idx].price) > 0 ? true : false}
                onClick={() => {
                  handleClick(
                    items && items[idx].id === '' ? false : true,
                    items && parseInt(items[idx].price) > 0 ? true : false,
                    items && items[idx].name,
                    choice[idx].episodeId,
                    idx
                  );
                }}
              >
                {option.item && <span className="item">{option.item}</span>}
                <span className="act">{option.context}</span>
              </List>
            );
          })}
      </SelectContainer>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/noitem" element={<ModalNoItem closeModal={closeModal} />} />
        <Route path="/draw" element={<ModalDraw closeModal={closeModal} />} />
        <Route
          path="/using"
          element={<ModalUseItem closeModal={closeModal} choiceList={choice} novelId={novelId} />}
        />
      </Routes>
    </>
  );
};

export default SelectOption;

const SelectContainer = styled.ul`
  width: 100vw;
  height: 300px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  background-color: rgba(21, 25, 39, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 30px 30px 0 0;
  padding: 22px 44px;
`;

const List = styled.li<{ isOwn: boolean; isSale: boolean }>`
  height: 54px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.variable.colors.btngray_color};
  opacity: ${(props) => (props.isOwn && !props.isSale ? '1' : '0.5')};
  .item {
    ${({ theme }) => theme.mixin.textStyle.R_17}
    ${({ theme }) => theme.mixin.flexCenter}
      padding: 4px 16px;
    padding-top: 6px;
    background-color: ${({ theme }) => theme.variable.colors.highlight_color};
    border-radius: 15px;
  }
  .act {
    ${({ theme }) => theme.mixin.textStyle.R_15}
  }
`;
