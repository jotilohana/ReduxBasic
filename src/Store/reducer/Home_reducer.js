const Home = {
  Address1: 'Khi',
  Address2: 'Isl',
};

export default (STATE = Home, action) => {
  console.log('Home_actions=>', action);
  return STATE;
};
