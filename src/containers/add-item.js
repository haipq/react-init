import { connect } from 'react-redux'
import AddItemComponent from '../components/add-item'
import { execAction1 } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (data) => {
        dispatch(execAction1(data))
    }
})

export const AddItem = connect(() => ({}), mapDispatchToProps)(AddItemComponent)
