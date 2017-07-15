export const addComment = comment => {
	return {
		type: "ADD_COMMENT",
		id: Date.now(),
		name: "Unknown",
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