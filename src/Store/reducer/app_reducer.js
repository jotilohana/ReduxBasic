const Name = {
  Users: [
    {
      name: 'jk',
      email: 'joti20@gmail.com',
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
