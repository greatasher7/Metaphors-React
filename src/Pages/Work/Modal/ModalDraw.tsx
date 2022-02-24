import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { Btn_Modal_Primary } from '../../../Components/ButtonModal';
import SignatureCanvas from 'react-signature-canvas';
import { getImage, postItemImage } from '../../../Api';
import { useRecoilState } from 'recoil';
import { optionTriggerAtom, userInfoAtom } from '../../../Store/Atoms';
import { create } from 'ipfs-http-client';
import * as Buffer from 'buffer';

// base64 to blob
const dataURItoBlob = (dataURI: string) => {
  var byteString = window.atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new Blob([ab], { type: mimeString });

  return blob;
};

const ModalDraw = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const signCanvas = useRef() as React.MutableRefObject<any>;
  const params = useParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [optionTrigger, setOptionTrigger] = useRecoilState(optionTriggerAtom);
  const [image, setImage] = useState(new Blob());

  const clear = () => {
    signCanvas.current.clear();
  };

  const handleClick = () => {
    const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'http' });

    const dataURL = signCanvas.current.getTrimmedCanvas().toDataURL('image/png');

    console.log('handleClick');
    client
      .add(dataURL)
      .then((response) => {
        const ipfsURL = 'https://ipfs.infura.io/ipfs/' + response.path;
        console.log('ipfsURL', ipfsURL);
        console.log('params.id', params.id);
        params.id &&
          postItemImage(userInfo.accessToken, ipfsURL, params.id)
            .then((res) => {
              console.log('postItemImage complete', res);
              closeModal();
              navigate(`/work/viewer/${params.id}/noitem`);
            })
            .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log('이미지 생성 실패');
        console.error(err);
      });
  };

  return (
    <ModalContainer>
      <ModalBox>
        <h3>[{params.id}] 획득 성공!</h3>
        <p className="desc">나만의 [{params.id}]를 그려보세요.</p>
        <Canvas_Container>
          <SignatureCanvas
            ref={signCanvas}
            canvasProps={{ className: 'sigCanvas canvasStyle' }}
            backgroundColor="#fff"
            penColor="#000"
          />
          <span className="clear_btn" onClick={clear}>
            지우기
          </span>
        </Canvas_Container>
        <p className="warning">*부적절한 그림은 운영사 임의로 거래가 금지될 수 있습니다.</p>
        <Btn_Modal_Primary label="완료" onClick={handleClick} />
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalDraw;

const ModalContainer = styled.div`
  ${({ theme }) => theme.mixin.modalContainer}
`;

const ModalBox = styled.div`
  ${({ theme }) => theme.mixin.modalBox}
  height: 570px;
  padding: 0 22px;
  padding-top: 44px;
  position: relative;
  .close_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 10px;
  }
  h3 {
    ${({ theme }) => theme.mixin.textStyle.M_18}
    text-align: center;
    color: ${({ theme }) => theme.variable.colors.highlight_color};
  }
  .desc {
    ${({ theme }) => theme.mixin.textStyle.M_16}
    margin-top: 10px;
  }
  .warning {
    ${({ theme }) => theme.mixin.textStyle.M_11}
    text-align: left;
    margin-top: 6px;
    margin-bottom: 60px;
  }
`;

const Canvas_Container = styled.div`
  width: 100%;
  height: calc(100vw - 88px);
  background-color: #999;
  margin-top: 30px;
  position: relative;
  .canvasStyle {
    width: 100%;
    height: 100%;
  }
  .clear_btn {
    position: absolute;
    right: 14px;
    bottom: 11px;
    ${({ theme }) => theme.mixin.textStyle.M_13}
  }
`;
