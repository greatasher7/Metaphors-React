import React from 'react';
import styled from 'styled-components';
import { Btn_Modal_Black, Btn_Modal_White } from '../../../Components/ButtonModal';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate } from 'react-router';

const ModalCancleSelling = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalBox>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        <h3>해당 [따뜻함]을 판매 취소할까요?</h3>
        <div className="item_card">
          <div className="image"></div>
          <div className="content">
            <h4 className="title">따뜻함</h4>
            <span className="dutability">4/10회 남음</span>
            <span className="price">2,000KLAY</span>
          </div>
        </div>
        <Btn_Container>
          <Btn_Modal_White
            label="예, 취소하겠습니다."
            onClick={() => {
              navigate('/inventory/completecancle');
            }}
          />
          <Btn_Modal_Black label="아니요, 취소하지 않겠습니다." onClick={closeModal} />
        </Btn_Container>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalCancleSelling;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 310px;
  padding: 0 24px;
  padding-top: 46px;
  position: relative;
  .close_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 10px;
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
    margin-bottom: 30px;
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

const Btn_Container = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 10px;
  > button {
    height: 32px;
    ${({ theme }) => theme.mixin.textStyle.R_14}
  }
`;