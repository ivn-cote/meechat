let initial = {
  'test': [
    { text: 'Hi there' },
    { text: 'Hi user', sender: 'Meedoc' }
  ]
};

export function messagesRd(state = initial, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const user = action.user,
        messObj = {
          text: action.message,
          sender: action.sender || ''
        };
      if (!user) {
        console.error('User cannot be empty in order to have a chat history');
        return state;
      }
      return {
        ...state,
        [user]: _.get(state, `${user}`, []).concat([ messObj ])
      };
    default:
      return state;
  }
};

export function userRd(state = { user: '' }, action) {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        user: action.user
      };
    case 'FLUSH_USER':
      return {
        ...state,
        user: ''
      };
    default:
      return state;
  }
}
