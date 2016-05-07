var socket;
function makeSocketConnection(nickname, dispatch) {
  socket = new WebSocket(`wss://codingtest.meedoc.com/ws?username=${encodeURIComponent(nickname)}`);

  socket.onmessage = function(evt) {
    var data;
    try {
      data = JSON.parse(evt.data);
    } catch (err) {
      console.error('Wrong response from Websocket');
    }
    if (!_.isObject(data) || !_.isString(data.message))
      console.error('Wrong response from Websocket');

    dispatch(addMessageAction(data.message, nickname, data.sender));
  };

  socket.onclose = function(evt) {
    console.log('CLOSED')
    if (!evt.wasClean)
      console.error('Websocket Termination');
    socket = null;
  };
  socket.onerror = function(error) {
    console.error('Websocket Error ' + error.message);
    socket = null;
  };
}

function sendMsg(text) {
  if (!socket)
    return console.error('Cannot send via broken Websocket');
  socket.send(text);
}

function changeUserAction(nickname) {
  return ({
    type: 'CHANGE_USER',
    user: nickname
  });
}

function addMessageAction(message, user, sender = '') {
  return ({
    type: 'ADD_MESSAGE',
    message,
    user,
    sender
  });
}

function flushUserAction() {
  return ({type: 'FLUSH_USER'});
}

export function startConnection(nickname) {
  return (dispatch, getState) => {
    makeSocketConnection(nickname, dispatch);
    return dispatch(changeUserAction(nickname));
  };
}

export function postViaConnection(msg, nickname) {
  return (dispatch, getState) => {
    sendMsg(nickname);
    return dispatch(addMessageAction(msg, nickname));
  };
}

export function closeConnection() {
  socket.close();
  return dispatch => {
    return dispatch(flushUserAction())
  }
}
