import { connect } from 'react-redux';
import creaters from '../actions/creaters';
import TextArea from '../components/TextArea';
import AppState from '../models/AppState';

const mapStateToProps = (state) => {
    let this_state: AppState = state.copyFileAndShowSummary;
    return {
        text: this_state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showTextSummaryProp: (text) => {
            dispatch(creaters.showTextSummary(text))
        }
    }
}

const TextAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextArea)

export default TextAreaContainer
