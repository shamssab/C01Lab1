import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
	const [startValue, setStartValue] = useState('');

	const handleAddTask = () => {
        const trimValue = startValue.trim();
		if (trimValue !== '') {
			onAddTask(startValue);
			setStartValue('');
		}
	};

	return (
		<View style={styles.addTodoForm}>
			<TextInput
				style={styles.input}
				placeholder="Enter a new task"
				value={startValue}
				onChangeText={(text) => setStartValue(text)}
				keyboardType="default"
				returnKeyType="done"
			/>
			<Button title="Add Task" onPress={handleAddTask} />
		</View>
	);
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;