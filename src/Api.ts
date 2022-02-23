import axios from 'axios';

const url = `http://169.56.87.186:3000`;

// Common ////////////////////////////////////////////////////////////
export const getImage = async (path: string) => {
  const result = await axios({
    method: 'get',
    url: `${url}/api/image`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      path: path,
    },
  });
  return result.data;
};

export const getUserAssetInfo = async (accessToken: string) => {
  const result = await axios({
    method: 'get',
    url: `${url}/api/user/info`,
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};

// Account ///////////////////////////////////////////////////////////
export const postEmailOverlap = async (email: string) => {
  const result = await axios({
    method: 'post',
    url: `${url}/api/auth/emailcheck`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
    },
  });
  return result.data;
};

export const postSignup = async (email: string, password: string) => {
  const result = await axios({
    method: 'post',
    url: `${url}/api/auth/signup`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      password: password,
    },
  });
  return result.data;
};

export const postSignin = async (email: string, password: string) => {
  const result = await axios({
    method: 'post',
    url: `${url}/api/auth/signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      password: password,
    },
  });
  return result.data;
};

export const postLogout = async (accessToken: string) => {
  const result = await axios({
    method: 'post',
    url: `${url}/api/auth/logout`,
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};

export const getUserGenre = async () => {
  const result = await axios({
    method: 'get',
    url: url + '/api/user/genre',
    headers: {},
  });
  return result.data;
};

export const getUserPersonality = async () => {
  const result = await axios({
    method: 'get',
    url: url + '/api/user/personality',
    headers: {},
  });
  return result.data;
};

export const postSigninDetail = async (
  accessToken: string,
  nickname: string,
  personality1: string,
  personality2: string,
  personality3: string,
  genre1: string,
  genre2: string,
  genre3: string
) => {
  console.log(
    'data in api function',
    accessToken,
    nickname,
    personality1,
    personality2,
    personality3,
    genre1,
    genre2,
    genre3
  );

  const result = await axios({
    method: 'post',
    url: url + '/api/auth/signin/detail',
    headers: {
      'x-access-token': accessToken,
      'Content-Type': 'application/json',
    },
    data: {
      nickname: nickname,
      personality1: personality1,
      personality2: personality2,
      personality3: personality3,
      genre1: genre1,
      genre2: genre2,
      genre3: genre3,
    },
  });
  return result.data;
};

// Novel //////////////////////////////////////////
export const getNovelList = async () => {
  const result = await axios({
    method: 'get',
    url: `${url}/api/nonuser/novel/list`,
    headers: {},
    data: '',
  });
  return result.data;
};

export const getNovelListUser = async (accessToken: string) => {
  const result = await axios({
    method: 'get',
    url: `${url}/api/novel/list`,
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};

export const postNovelDetail = async (accessToken: string, id: number) => {
  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/detail`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { novelId: id },
  });
  return result.data;
};

export const postNovelEpisode = async (accessToken: string, id: number) => {
  console.log('api', accessToken, id);

  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/page`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { novelId: id },
  });
  return result.data;
};

export const postRestartNovel = async (accessToken: string, id: number) => {
  console.log('api', accessToken, id);

  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/new`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { novelId: id },
  });
  return result.data;
};

export const postItem = async (accessToken: string, id: number) => {
  console.log('api', accessToken, id);

  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/item`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { novelId: id },
  });
  return result.data;
};

export const postUseItem = async (
  accessToken: string,
  id: number,
  next: string | undefined,
  name: string | undefined
) => {
  console.log('api', accessToken, id);

  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/nextEpisode/useItem`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { novelId: id, next: next, name: name },
  });
  return result.data;
};

export const postCreateItem = async (accessToken: string, name: undefined | string) => {
  console.log('api', accessToken, name);

  const result = await axios({
    method: 'post',
    url: `${url}/api/item/create`,
    headers: {
      'x-access-token': accessToken,
    },
    data: { name: name },
  });
  return result.data;
};

export const postItemImage = async (accessToken: string, name: string, image: Blob) => {
  console.log('api', accessToken, name, image);

  const data = new FormData();
  data.append('files', image);
  data.append('name', name);

  const result = await axios({
    method: 'post',
    url: `${url}/api/item/img/create`,
    headers: {
      'x-access-token': accessToken,
    },
    data: data,
  });
  return result.data;
};

export const postUseItemCookie = async (accessToken: string, novelId: string, next: string) => {
  console.log('api', accessToken, novelId, next);

  const result = await axios({
    method: 'post',
    url: `${url}/api/novel/nextEpisode/useCookie`,
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
