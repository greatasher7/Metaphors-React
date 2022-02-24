import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Btn_Modal_Primary, Btn_Modal_Inactive } from '../../../Components/ButtonModal';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../Store/Atoms';
import { purchaseItem } from '../../../Api';

interface props {
  closeModal: any;
  item: any;
  klay: number;
}

const ModalBuying = ({ closeModal, item, klay }: props) => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    console.log('item');
    console.log(item);
  }, []);

  return (
    <ModalContainer>
      <ModalBox hasKlay={klay >= item.price}>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        <h3>해당 [{item.name}]를 지금 구매할까요?</h3>
        <div className="item_card">
          <div className="image">
            <img
              src={item.imageURI}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="content">
            <h4 className="title">{item.name}</h4>
            <span className="dutability">
              {item.durability}/{item.maxDurability}회 남음
            </span>
            <span className="price">{item.price} KLAY</span>
          </div>
        </div>
        {klay >= item.price && userInfo.nickname != item.ownerNickname && (
          <Btn_Modal_Primary
            label="구입하기"
            onClick={() => {
              purchaseItem(userInfo.accessToken, item.id).then((res) => {
                console.log(res);
                navigate('/market/completebuying');
              });
            }}
          />
        )}
        {klay < item.price && userInfo.nickname != item.ownerNickname && (
          <>
            <p className="warning">*KLAY 잔액이 부족합니다. KLAY를 충전해주세요.</p>
            <Btn_Modal_Inactive label="구입하기" />
          </>
        )}
        {userInfo.nickname == item.ownerNickname && (
          <>
            <p className="warning">*현재 유저의 아이템입니다.</p>
            <Btn_Modal_Inactive label="구입하기" />
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalBuying;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div<{ hasKlay: boolean }>`
  ${({ theme }) => theme.mixin.modalBox}
  height: 288px;
  padding: 0 24px;
  padding-top: 50px;
  position: relative;
  .close_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 10px;
  }
  .warning {
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-bottom: 6px;
  }
  h3 {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    text-align: center;
  }
  .item_card {
    display: grid;
    grid-template-columns: 77px auto;
    grid-column-gap: 14px;
    height: 100px;
    width: 183px;
    padding: 12px 11px;
    ${({ theme }) => theme.mixin.textStyle.R_12}
    background-color: #2c2e48;
    border-radius: 6px;
    margin-top: 15px;
    margin-bottom: ${(props) => (props.hasKlay ? '45px' : '35px')};
    .image {
      width: 77px;
      height: 77px;
      background-color: ${({ theme }) => theme.variable.colors.A_FFF};
      border-radius: 5px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: ${({ theme }) => theme.variable.colors.A_FFF};
      .title {
        ${({ theme }) => theme.mixin.flexCenter}
        padding: 0 9px;
        height: 20px;
        background-color: ${({ theme }) => theme.variable.colors.item_color};
        border-radius: 10px;
      }
      .dutability {
        margin-top: 8px;
        color: #a2a4b7;
      }
      .price {
        ${({ theme }) => theme.mixin.textStyle.R_12}
        margin-top: 20px;
      }
    }
  }
`;
