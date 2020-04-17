import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
	items: {},
	totalAmount: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.product;
			const prodPrice = addedProduct.price;
			const prodTitle = addedProduct.title;

			let updatedOrNewItem;
			if (state.items[addedProduct.id]) {
				updatedOrNewItem = new CartItem(
					state.items[addedProduct.id].quantity + 1,
					prodPrice,
					prodTitle,
					state.items[addedProduct.id].sum + prodPrice
				);
				return {
					...state,
					items: {
						...state.items,
						[addedProduct.id]: updatedOrNewItem,
					},
					totalAmount: state.totalAmount + prodPrice,
				};
			} else {
				updatedOrNewItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
				return {
					...state,
					items: { ...state.items, [addedProduct.id]: updatedOrNewItem },
					totalAmount: state.totalAmount + prodPrice,
				};
			}
		case REMOVE_FROM_CART:
			const selectedCartItem = state.items[action.productId];
			const currentQuantity = selectedCartItem.quantity;
			let updatedCartItems;
			if (currentQuantity > 1) {
				const updatedCartItem = new CartItem(
					selectedCartItem.quantity - 1,
					selectedCartItem.productPrice,
					selectedCartItem.prodTitle,
					selectedCartItem.sum - selectedCartItem.productPrice
				);
				updatedCartItems = {
					...state.items,
					[action.productId]: updatedCartItem,
				};
			} else {
				updatedCartItems = { ...state.items };
				delete updatedCartItems[action.productId];
			}
			return {
				...state,
				items: updatedCartItems,
				totalAmount: state.totalAmount - selectedCartItem.productPrice,
			};
	}
	return state;
};
