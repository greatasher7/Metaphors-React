import React from 'react';
import styled from 'styled-components';
import { Btn_Modal_Primary } from '../../../Components/ButtonModal';
import Icon_x from '../../../Assets/Images/Icon_x.png';
import { useNavigate } from 'react-router';

const ModalSelling = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalBox>
        <img src={Icon_x} alt="close button" className="close_btn" onClick={closeModal} />
        <h4>[따뜻함] 팔기</h4>
        <span className="durability">3/10회 남음</span>
        <div className="image"></div>
        <div className="input_container">
          <input type="number" placeholder="판매가격을 입력해주세요." className="selling_price" />
          <span className="klay">KLAY</span>
        </div>
        <Btn_Modal_Primary
          label="거래소에 올리기"
          onClick={() => {
            navigate('/inventory/completeselling');
          }}
        />
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalSelling;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 310px;
  padding: 0 24px;
  padding-top: 25px;
  position: relative;
  .close_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 10px;
  }
  h4 {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    text-align: center;
  }
  .durability {
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-top: 5px;
  }
  .image {
    width: 103px;
    height: 103px;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.variable.colors.A_FFF};
    border-radius: 5px;
  }
  .input_container {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 33px;
    position: relative;
    .selling_price {
      border-bottom: 1px solid ${({ theme }) => theme.variable.colors.black_color};
      color: ${({ theme }) => theme.variable.colors.black_color};
      width: 100%;
      padding: 5px;
      ${({ theme }) => theme.mixin.textStyle.R_16}
    }
    .klay {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      ${({ theme }) => theme.mixin.textStyle.R_16}
      color: ${({ theme }) => theme.variable.colors.black_color};
    }
  }
`;
