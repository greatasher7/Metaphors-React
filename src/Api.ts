import axios from 'axios';

// Account ///////////////////////////////////////////////////////////
var data = JSON.stringify({
  email: 'a@gmail.com',
});

export const getEmailOverlap = async (email: string) => {
  const result = await axios({
    method: 'get',
    url: 'http://169.56.87.186:3000/api/auth/emailcheck',
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
    url: 'http://169.56.87.186:3000/api/auth/signup',
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
    url: 'http://169.56.87.186:3000/api/auth/signin',
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
    url: 'http://169.56.87.186:3000/api/auth/logout',
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};

// Novel //////////////////////////////////////////
export const getNovelList = async () => {
  const result = await axios({
    method: 'get',
    url: 'http://169.56.87.186:3000/api/nonuser/novel/list',
    headers: {},
    data: '',
  });
  return result.data;
};

export const getNovelListUser = async (accessToken: string) => {
  const result = await axios({
    method: 'get',
    url: 'http://169.56.87.186:3000/api/novel/list',
    headers: {
      'x-access-token': accessToken,
    },
    data: '',
  });
  return result.data;
};
