// reducer ilgili datayı günceller ve yenisini döner
function userReducer(state = '', action) {
    switch (action.type) {
        case 'userUpdate':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;
