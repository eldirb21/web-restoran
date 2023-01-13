const initialState = {}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'first':
            return { ...state, ...payload }

        default:
            return state
    }
}
