const Home = {
  name: 'HomeScreen',
  data: 'jklohana',
};

export default (STATE = Home, action) => {
  console.log('Home_actions=>', action);
  return STATE;
};
