export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(newUser) {
    console.log(newUser)
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}
