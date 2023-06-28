interface TodoState {
	id: string;
	todo: string;
	isCompleted: boolean;
}

export interface TodosState {
	todos: TodoState[];
}
