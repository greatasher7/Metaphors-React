import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn_Modal_Primary, Btn_Modal_Inactive } from '../../../Components/ButtonModal';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate } from 'react-router';

const ModalBuying = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const [hasKlay, setHasKlay] = useState(false);

  return (
    <ModalContainer>
      <ModalBox hasKlay={hasKlay}>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        <h3>해당 [청산가리]를 지금 구매할까요?</h3>
        <div className="item_card">
          <div className="image"></div>
          <div className="content">
            <h4 className="title">청산가리</h4>
            <span className="dutability">4/10회 남음</span>
            <span className="price">2,000KLAY</span>
          </div>
        </div>
        {hasKlay ? (
          <Btn_Modal_Primary
            label="구입하기"
            onClick={() => {
              navigate('/market/completebuying');
            }}
          />
        ) : (
          <>
            <p className="warning">*KLAY 잔액이 부족합니다. KLAY를 충전해주세요.</p>
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
