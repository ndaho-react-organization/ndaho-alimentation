import { connect } from 'react-redux'
import App from '../components/App'
import { addToCart, updateCart } from "../../lib/actions"

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items: state.items }
    },

    function mapDispatchToProps(dispatch) {
        return {
            onAddToCart: (item, quantity) => dispatch(addToCart(item, quantity)),
            onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity))
        }
    }

)(App)