/* eslint-disable import/no-anonymous-default-export */
const getName = state => state.auth.user.name;
const getAuth = state => state.auth.token;

export default { getName, getAuth };
