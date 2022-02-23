import axios from 'axios';

const url = 'http://169.56.87.186:3000';

////////////////////////////

// 공통
// 사용자 정보 요청
export const getUserInfo = async (accessToken: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'get',
    url: url + '/api/user/info',
    headers: {
      'x-access-token': accessToken,
    },
  });
  return result.data;
};
// 쿠키 충전 요청
export const purchaseCookie = async (accessToken: string, cookie: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/purchase/cookie',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      cookie: cookie,
    },
  });
  return result.data;
};
// 토큰 충전 요청
export const purchaseToken = async (accessToken: string, token: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/purchase/token',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      token: token,
    },
  });
  return result.data;
};

////////////////////////////

// RefreshToken 재발급
export const getRefreshToken = async (refreshToken: string) => {
  const result = await axios({
    method: 'post',
    url: url + '/api/auth/refreshToken',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      refreshToken: refreshToken,
    },
  });
  return result.data;
};

// 로그아웃
export const postLogout = async (accessToken: string) => {
  const result = await axios({
    method: 'post',
    url: url + '/api/auth/logout',
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};

// Novel //////////////////////////////////////////

export const getNovelDetail = async (accessToken: string, id: number) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'get',
    url: 'http://169.56.87.186:3000/api/novel/list',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelID: id,
    },
  });
  return result.data;
};

////////////////////////////

// 소설
// 소설 목록 반환 - 로그인 전
export const getNonuserNovelList = async () => {
  const result = await axios({
    method: 'get',
    url: url + '/api/nonuser/novel/list',
    headers: {
      // 'x-access-token': accessToken,
    },
  });
  return result.data;
};
// 소설 목록 반환 - 로그인 후
export const getNovelListt = async (accessToken: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'get',
    url: url + '/api/novel/list',
    headers: {
      'x-access-token': accessToken,
    },
  });
  return result.data;
};
// 소설 상세 정보 반환 및 현재 보고 있는 에피소드 반환
export const getNovelDetaill = async (accessToken: string, novelId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/detail',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
    },
  });
  return result.data;
};
// 소설 다시 시작하기
export const novelNew = async (accessToken: string, novelId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/new',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
    },
  });
  return result.data;
};
// 모든 페이지 반환 요청
export const getNovelPage = async (accessToken: string, novelId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/page',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
    },
  });
  return result.data;
};
// 아이템 반환
export const getNovelItem = async (accessToken: string, novelId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/item',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
    },
  });
  return result.data;
};
// 아이템 사용(블록체인)
export const useItem = async (accessToken: string, novelId: string, next: string, name: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/nextEpisode/useItem',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
      next: next,
      name: name,
    },
  });
  return result.data;
};
// 아이템 1회 사용(쿠키)
export const useCookie = async (accessToken: string, novelId: string, next: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/nextEpisode/useCookie',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      novelId: novelId,
      next: next,
    },
  });
  return result.data;
};
// currentPage 업데이트 - 소설 보는 도중에 왼쪽 상단의 뒤로 돌아가기 버튼 클릭 시
export const returnMain = async (accessToken: string, episode: string, number: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/novel/returnMain',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      episode: episode,
      number: number,
    },
  });
  return result.data;
};

////////////////////////////

// 인벤토리
// 아이템 생성하기
export const createItem = async (accessToken: string, name: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/item/create',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      name: name,
    },
  });
  return result.data;
};
// 아이템 생성하기
export const createItemImg = async (accessToken: string, name: string) => {
  // console.log('Token', accessToken);
  // const result = await axios({
  //   method: 'post',
  //   url: url + '/api/item/create',
  //   headers: {
  //     'x-access-token': accessToken,
  //   },
  //   data: {
  //     name: name
  //   }
  // });
  // return result.data;
};
// 내 아이템 보기
export const getMyItemInfo = async (accessToken: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'get',
    url: url + '/api/item/info',
    headers: {
      'x-access-token': accessToken,
    },
  });
  return result.data;
};

////////////////////////////

// 인벤토리거래소
// 판매 중인 아이템 보기(회원,비회원 둘다)
export const getNftForSaleItems = async () => {
  const result = await axios({
    method: 'get',
    url: url + '/api/nft/forSaleItems',
    headers: {
      // 'x-access-token': accessToken,
    },
  });
  return result.data;
};
// 이름으로 판매 중인 아이템 검색(회원,비회원 둘다)
export const searchNftForSaleItems = async (name: string) => {
  const result = await axios({
    method: 'post',
    url: url + '/api/nft/search/saleItems',
    headers: {
      // 'x-access-token': accessToken,
    },
    data: {
      name: name,
    },
  });
  return result.data;
};
// 내가 판매 중인 아이템 보기
export const getUserNftForSaleItems = async (accessToken: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'get',
    url: url + '/api/nft/forSaleItems/user',
    headers: {
      'x-access-token': accessToken,
    },
  });
  return result.data;
};
// 아이템 구매하기
export const purchaseItem = async (accessToken: string, tokenId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/nft/items/purchase',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      tokenId: tokenId,
    },
  });
  return result.data;
};
// 아이템 판매 등록
export const sellItems = async (accessToken: string, tokenId: string, price: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/nft/items/sell',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      tokenId: tokenId,
      price: price,
    },
  });
  return result.data;
};
// 아이템 판매 등록 취소
export const sellItemsCancel = async (accessToken: string, tokenId: string) => {
  console.log('Token', accessToken);
  const result = await axios({
    method: 'post',
    url: url + '/api/nft/items/sell/cancel',
    headers: {
      'x-access-token': accessToken,
    },
    data: {
      tokenId: tokenId,
    },
  });
  return result.data;
};
