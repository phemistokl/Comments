export const addComment = comment => {
	return {
		type: "ADD_COMMENT",
		id: Date.now(),
		comment,
		date: Date.now(),
		like: 0
	};
};