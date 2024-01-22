import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'

const ToDoList = ({ startValues }) => {
	const [toDos, setToDos] = useState(startValues.map((value) => ({ id: uuidv4(), title: value })));

	const addToDo = (newTitle) => {
		const newTask = { id: uuidv4(), title: newTitle }
		setToDos((prevToDos) => [...prevToDos, newTask])
	};

	const removeToDo = (id) => {
		setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
	};

	return (
		<View style={styles.container}>
			{toDos.map((toDo) => (
				<View key={toDo.id} style={styles.todoItem}>
					<Text>{toDo.title}</Text>
					<Button
						title="Remove Task"
						onPress={() => removeToDo(toDo.id)}
					/>
				</View>
			))}
			<AddTask onAddTask={addToDo} />
		</View>
	);
};

ToDoList.defaultProps = {
	startValues: [],
};

const styles = StyleSheet.create({
	todoListContainer: {
		margin: 10,
	},
	todoItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		marginVertical: 5,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
	},
});

export default ToDoList;