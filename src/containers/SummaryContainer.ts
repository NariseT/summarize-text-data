import { connect } from 'react-redux';
import Summary from '../components/Summary';
import AppState from '../models/AppState';

const mapStateToProps = (state) => {
    let this_state: AppState = state.copyFileAndShowSummary;
    return {
        character_count: this_state.summary.character_count,
        character_and_space_count: this_state.summary.character_and_space_count,
        word_count: this_state.summary.word_count,
        line_number: this_state.summary.line_number,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const SummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary)

export default SummaryContainer
