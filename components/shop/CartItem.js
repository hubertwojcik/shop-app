import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platfom,
	Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constans/Colors";

const CartItem = ({ quantity, title, amount, onRemove }) => {
	return (
		<View style={styles.cartItem}>
			<View style={styles.itemData}>
				<Text style={styles.quantity}>{quantity} </Text>
				<Text style={styles.mainText}>{title}</Text>
			</View>
			<View style={styles.itemData}>
				<Text style={styles.mainText}>$ {amount.toFixed(2)}</Text>
				<TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
					<Ionicons
						name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
						size={23}
						color="red"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cartItem: {
		padding: 10,
		backgroundColor: Colors.white,
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},
	itemData: {
		flexDirection: "row",
		alignItems: "center",
	},
	quantity: {
		color: "#888",
		fontSize: 16,
	},
	mainText: {
		fontSize: 16,
	},
	deleteButton: {
		marginLeft: 20,
	},
});

export default CartItem;
