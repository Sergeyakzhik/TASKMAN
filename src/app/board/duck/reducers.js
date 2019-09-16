import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	listNames: ['sprint', 'inProgress', 'testing', 'complete'],
	lists: {
		sprint: {
			title: 'Sprint',
			tickets: [
				{
					title: 'Add new column to table'
				}
			] 
		},
		inProgress: {
			title: 'In Progress',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		},
		testing: {
			title: 'Testing',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		},
		complete: {
			title: 'Complete',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		}
	}
};

const addTicket = (state = INITIAL_STATE, action) => ({ 
	...state, 
	lists: {
		...state.lists, 
		[action.listName]: {
			...state.lists[action.listName], 
			tickets: [
				...state.lists[action.listName].tickets,
				action.ticket
			]
		}
	}
});

const moveTicket = (state = INITIAL_STATE, action) => {
	if (action.source.droppableId === action.destination.droppableId) {
		const result = [ ...state.lists[action.source.droppableId].tickets ];
		const [removed] = result.splice(action.source.index, 1);
		result.splice(action.destination.index, 0, removed);

		return {
			...state,
			lists: {
				...state.lists, 
				[action.source.droppableId]: {
					...state.lists[action.source.droppableId], 
					tickets: result
				}
			}
		};
	} else {
		const sourceClone = [ ...state.lists[action.source.droppableId].tickets ];
		const destinationClone = [ ...state.lists[action.destination.droppableId].tickets ];
		const [removed] = sourceClone.splice(action.source.index, 1);

		destinationClone.splice(action.destination.index, 0, removed);

		return {
			...state,
			lists: {
				...state.lists, 
				[action.source.droppableId]: {
					...state.lists[action.source.droppableId], 
					tickets: sourceClone
				},
				[action.destination.droppableId]: {
					...state.lists[action.destination.droppableId], 
					tickets: destinationClone
				}
			}
		};
	}
};

const HANDLERS = {
	[Types.ADD_TICKET]: addTicket,
	[Types.MOVE_TICKET]: moveTicket
};

export default createReducer(INITIAL_STATE, HANDLERS);