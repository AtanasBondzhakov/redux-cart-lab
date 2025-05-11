import { useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice.js';

const CartButton = (props) => {
    const dispatch = useDispatch();

    const cartClickHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={classes.button} onClick={cartClickHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
