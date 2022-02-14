import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Btn_Primary_FontBlack } from '../../Components/Button';
import { IItem } from '../../Store/Type/Interfaces';
import ItemCard from './ItemCard';
import ModalCancleSelling from './Modal/ModalCancleSelling';
import ModalCompleteCancle from './Modal/ModalCompleteCancle';
import ModalCompleteSelling from './Modal/ModalCompleteSelling';
import ModalSelling from './Modal/ModalSelling';

const item_list: IItem[] = [
  {
    name: '따뜻함',
    image: 'ddd',
    durability: 7,
    onSale: true,
    price: 2000,
  },
  {
    name: '용기',
    image: 'ddd',
    durability: 5,
    onSale: false,
    price: 2000,
  },
  {
    name: '청산가리',
    image: 'ddd',
    durability: 3,
    onSale: false,
    price: 2000,
  },
];

const Inventory = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate('/inventory');
  };

  return (
    <>
      <Container>
        <Btn_Primary_FontBlack label="인벤토리" />
        <p className="my_klay">150,032KLAY</p>
        <h3 className="list_title">내 소재</h3>
        <section className="item_list">
          {item_list.map((item, idx) => (
            <ItemCard
              key={idx}
              name={item.name}
              durability={item.durability}
              image={item.image}
              onSale={item.onSale}
              price={item.price ? item.price : 0}
            />
          ))}
        </section>
      </Container>
      <Routes>
        <Route path="/selling" element={<ModalSelling closeModal={closeModal} />} />
        <Route path="/completeselling" element={<ModalCompleteSelling closeModal={closeModal} />} />
        <Route path="/cancleselling" element={<ModalCancleSelling closeModal={closeModal} />} />
        <Route path="/completecancle" element={<ModalCompleteCancle closeModal={closeModal} />} />
      </Routes>
    </>
  );
};

export default Inventory;

const Container = styled.div`
  ${({ theme }) => theme.mixin.paddingSide_depth1}
  ${({ theme }) => theme.mixin.paddingTopBottom}
  >button {
    height: 44px;
  }
  .my_klay {
    color: #a2a4b7;
    ${({ theme }) => theme.mixin.textStyle.R_12}
    margin-top: 15px;
  }
  .list_title {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    margin-top: 45px;
  }
  .item_list {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
`;
