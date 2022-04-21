const Name = {
  Users: [
    {
      name: 'jk',
      email: 'jklohana',
    },
  ],
};

export default (STATE = Name, action) => {
  console.log('actions=>', action);
  switch (action.type) {
    case 'SETDATA':
      return {
        ...STATE,
        Users: [...STATE.Users, action.data],
      };
  }
  return STATE;
};
