export const initialState = {
	loading: true,
	error: '',
	data: {}
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':      
			return {
				loading: false,
				data: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				data: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}