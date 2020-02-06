const tokenInLocalStorage = localStorage.getItem('access');

const initialState = {
    tokens: {
        access: tokenInLocalStorage ?  tokenInLocalStorage : ""
    },
    authenticated: false
  };

const loginReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            localStorage.setItem('access', action.payload.access);
            return {
                ...state,
                tokens: action.payload,
                authenticated: true
            }
          
        case 'setAuthenticated':
            return {
                ...state,
                authenticated: action.payload
            }

        default:
            return state;
    }
}

export default loginReducer;