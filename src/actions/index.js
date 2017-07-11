export const getComments = () => {
	return {
		type: "GET_COMMENTS"
	};
};

export const addComment = comment => {
	return {
		type: "ADD_COMMENT",
		id: Date.now(),
		comment,
		date: new Date(),
		like: 0
	};
};

export const setSort = sort => {
	return {
		type: 'SET_SORT',
		sort
	};
};