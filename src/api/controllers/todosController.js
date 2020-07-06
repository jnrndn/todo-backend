export const getTodos = (req, res) => {
	res.send({
		todos: [
			{
				id: 1,
				description: 'This is a todo',
			},
			{
				id: 2,
				description: 'This is another todo',
			},
		],
	});
};
