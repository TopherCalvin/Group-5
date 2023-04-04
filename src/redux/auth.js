const init = {
	email: "John Doe",
	password: "",
};

function userReducer(state = init, action) {
	//ACTION ADALAH EVENT YANG TERJADI
	if (action.type == "login") {
		return {
			...state,
			email: action.payload.email,
			password: action.payload.password,
		};
	} else {
		return init;
	}
	return state;
}

export default userReducer;
