const Name = {
  name: 'jk',
  email: 'jklohana',
};

export default (STATE = Name, action) => {
  console.log('actions=>', action);
  switch (action.type) {
    case 'SETDATA':
      return ({
        ...STATE,
        name: action.data,
      });
  }
  return STATE;
};
