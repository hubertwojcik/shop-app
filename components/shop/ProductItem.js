import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

import Colors from "../../constans/Colors";

const ProductItem = ({ image, title, price, onViewDetail, onAddToCart }) => {
	let TouchableComponent = TouchableOpacity;
	if (Platform.OS === "adroid" && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.product}>
			<View style={styles.touchable}>
				<TouchableComponent onPress={onViewDetail} useForeground>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{ uri: image }} />
					</View>
					<View style={styles.details}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.price}>${price.toFixed(2)}</Text>
					</View>
					<View style={styles.actions}>
						<Button
							color={Colors.primary}
							title="View Details"
							onPress={onViewDetail}
						/>
						<Button
							color={Colors.primary}
							title="To Cart"
							onPress={onAddToCart}
						/>
					</View>
				</TouchableComponent>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	product: {
		shadowColor: Colors.black,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: Colors.white,
		height: 300,
		margin: 20,
		overflow: "hidden",
	},
	touchable: {
		overflow: "hidden",
		borderRadius: 10,
	},
	imageContainer: {
		width: "100%",
		height: "60%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	details: {
		alignItems: "center",
		height: "15%",
		padding: 10,
	},
	title: {
		fontSize: 18,
		marginVertical: 4,
	},
	price: {
		fontSize: 14,
		color: "#888",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "25%",
		paddingHorizontal: 20,
	},
});

export default ProductItem;
