import { connect } from 'react-redux';
import creaters from '../actions/creaters';
import FileDropzone from '../components/FileDropzone';
import AppState from '../models/AppState';

const mapStateToProps = (state) => {
    let this_state: AppState = state.copyFileAndShowSummary;
    return {
        fileNameOrErrorMessage: this_state.fileNameOrErrorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        copyFileContentsProp: (fileName, contents) => {
            dispatch(creaters.copyFileContents(fileName, contents))
        },
        rejectFileProp: (errorMessage) => {
            dispatch(creaters.rejectFile(errorMessage))
        },
        showTextSummaryProp: (contents) => {
            dispatch(creaters.showTextSummary(contents))
        },
    }
}

const FileDropzoneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDropzone)

export default FileDropzoneContainer
