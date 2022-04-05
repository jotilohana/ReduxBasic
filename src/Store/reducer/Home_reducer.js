const Home = {
  name: 'HomeScreen',
  data: 'jklohana',
};

export default (STATE = Home, action) => {
    console.log("actions=>", action)
  return STATE;
};
