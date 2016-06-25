import CopyFileContents from '../models/CopyFileContentsAction';
import RejectFile from '../models/RejectFileAction';
import ShowTextSummary from '../models/ShowTextSummaryAction';
import types from './types';

const copyFileContents = (fileName: string, contents: string): CopyFileContents => {
    return {
        type: types.COPY_FILE_CONTENTS,
        fileName,
        contents
    };
}

const rejectFile = (errorMessage: string): RejectFile => {
    return {
        type: types.REJECT_FILE,
        errorMessage
    }
}

const showTextSummary = (text: string): ShowTextSummary => {
    return {
        type: types.SHOW_TEXT_SUMMARY,
        text
    }
}

export default {
    copyFileContents,
    rejectFile,
    showTextSummary
}
