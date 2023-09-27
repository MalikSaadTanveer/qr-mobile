// export const BASE_URL = 'https://golf-qr-db.vercel.app';
export const BASE_URL = 'https://golf-qr-db-tawny.vercel.app/';
// login endpoint
export const USER_LOGIN = BASE_URL + '/api/v1/user/login';
// get membership by user id
export const GET_MEMBERSHIP_BY_USER_ID = BASE_URL + '/api/v1/membership/user/';
// get membership detail by memberShip id
export const GET_MEMBERSHIP_BY_ID = BASE_URL + '/api/v1/membership/';
// add memberShip detail
// export const ADD_MEMBERSHIP_DETAIL =
//   BASE_URL + '/api/v1/membership-details/add-membership-detail';

// get membership by scanning V2
export const GET_MEMBERSHIP_BY_SCANNING =
  BASE_URL + '/api/v1/membership-details/get-membership-by-scanning-qr-code/';
export const GET_ALL_ROOMS = BASE_URL + '/api/v1/room/get-all-rooms';
export const ADD_MEMBERSHIP_DETAIL =
  BASE_URL + '/api/v1/membership-details/add-membership-time-manually';
export const UPDATE_MEMBERSHIP_DETAIL_BY_ID =
  BASE_URL + '/api/v1/membership/';