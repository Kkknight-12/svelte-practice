import { v4 as uuid } from 'uuid';

export const load = async () => {
	const todos = [
		{
			id: uuid(),
			title: 'Todo ',
			completed: true,
			arr: [
				{
					a: 1
				},
				{ b: 2 }
			]
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: false,
			arr: [
				{
					c: 1
				}
			]
		},
		{
			id: uuid(),
			title: 'Todo ',
			completed: true,
			arr: [
				{
					d: 0
				},
				{
					e: 1
				},
				{ f: 2 }
			]
		}
	];

	const users = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		return response.json();
	};
	const totalUsers = await users();

	return {
		todos,
		totalUsers
	};
};
