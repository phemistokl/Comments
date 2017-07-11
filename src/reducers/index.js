import { combineReducers } from 'redux';

const InitialState = [
	{
		id: 0,
		name: "User1",
		comment: "Even in these scenarios though, you can usually skirt away and clear the board.",
		date: new Date('2016-03-07T12:00:00Z'),
		like: 0,
		reply: [
			{
				id: 0,
				name: "User-name",
				comment: "The only really bad position is when you go first and you dont have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board.",
				date: new Date('2017-03-07T12:00:00Z'),
				like: 0,
				reply: [ 
					{
						id: 0,
						name: "User1",
						comment: "Can i add youin game to watch some replays?",
						date: new Date('2017-03-07T12:00:00Z'),
						like: 0,
						reply: [
							{
								id: 0,
								name: "User-name",
								comment: "Can i add youin game to watch some replays?",
								date: new Date('2017-03-07T12:00:00Z'),
								like: 0,
							},
						],
					},	
				],
			},
		],
	},
	{
		id: 1,
		name: "User-name",
		comment: "Of course, but despite what one would guess initially, this deck's playstyle lends itself to remarkable consistency due to its ability to stabilize. The only really bad position is when you go first and you don't have a natural selection or flash reincarnation. Even in these scenarios though, you can usually skirt away and clear the board. Another point of consistency is that when you're in end game, you'll never be plagued by drawing 2-3 drops every other deck runs. You'll always get a power creature or removal.",
		date: new Date('2017-03-07T12:00:00Z'),
		like: 22,
	},
	{
		id: 2,
		name: "User-name",
		comment: "Congrats. I've played a deck like this for a while but with different specific cards. It's not easy to pilot since you can't do much your first couple of turns but stall, and if you don't pull the right cards at the right time, you fall hopelessly behind.",
		date: new Date('2017-03-07T12:00:00Z'),
		like: 0,
	},
	{
		id: 3,
		name: "User-name",
		comment: "Yea Harvestor/meta is a classic. I put it back in after the Kron nerf. But yea Qeltar I totaly run the harvest package, although Sunsteel or taygete are both very valid alternatives. Congrats on S rank, always love seeing a fellow control player do succesfully.",
		date: new Date('2017-03-07T12:00:00Z'),
		like: -10,
	},
	{
		id: 4,
		name: "User-name",
		comment: "This deck is heavily inspired by Mogwai's control magmar from last season http://managlow.com/wp-content/uploads/2016/07/MogwaiControlVaath07072016.png One of the most fun deck styles I've ever played and probably the most unique. I didn't find myself using silhouette tracer often and replaced kinetic equilibrium with thumping wave, also added another plasma storm and iridium scale. I believe these are more consistently useful than kinetic equilibrium. The main combo of the deck is going second, turn 2 flash reincarnate makantor, followed by keeper of the vale for guaranteed makantor.",
		date: new Date('2017-03-07T12:00:00Z'),
		like: 0,
	},
];

function comments(state = InitialState, action) {
	switch (action.type) {
		case 'GET_COMMENTS': {
			return [
				...state
			];
		}

		case 'ADD_COMMENT': {
			return [
				...state, {
					id: action.id,
					name: action.name,
					comment: action.comment,
					date: action.date,
					like: action.like
				}
			];
		}

		default: {
			return state;
		}
	}
};

function sort(state = "NEWEST", action) {
	switch (action.type) {
		case 'SET_SORT': {
			return action.sort;
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({ comments, sort });