const Name = {
  name: 'jk',
  email: 'jklohana',
};

export default (STATE = Name, action) => {
  console.log('actions=>', action);
  return STATE;
};
