import { cartActions } from "./cart-slice.js";
import { uiActions } from "./ui-slice.js";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://redux-demo-c527d-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error('Sending cart failed!');
            }
        };

        try {
            await sendRequest()

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sent cart data successfully!'
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }
    }
};

export const getCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-demo-c527d-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            const responseData = await response.json();

            return responseData;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }));
        }
    }
};