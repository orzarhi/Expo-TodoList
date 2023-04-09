import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo) return;

		setTodos((prevItems) => {
			return [...prevItems, todo];
		});

		setText("");
	};

	const deleteItem = (id) => {
		setTodos((prevItems) => {
			return prevItems.filter((_, index) => {
				return index !== id;
			});
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Todo List App!</Text>
			<TextInput
				style={styles.input}
				placeholderTextColor={"white"}
				onChangeText={setText}
				value={text}
				placeholder={"Please type here…"}
			/>
			<Button
				title="Add Todo"
				disabled={!text}
				onPress={() => addTodo(text)}
			/>

			{todos.map((todo, index) => (
				<Text
					key={index}
					style={styles.todo}
					onPress={() => deleteItem(index)}
				>
					{index + 1}. {todo}
				</Text>
			))}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#393646",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "#fff",
		fontSize: 20,
	},
	input: {
		padding: 16,
		marginTop: 50,
		color: "#fff",
	},
	todo: {
		padding: 10,
		color: "#FF8400",
		fontWeight: "bold",
	},
});
