import AppState from '../models/AppState'
import CopyFileContents from '../models/CopyFileContentsAction';
import RejectFile from '../models/RejectFileAction';
import ShowTextSummary from '../models/ShowTextSummaryAction';
import types from '../actions/types';
import * as ES6 from 'es6-shim';

let initialState: AppState = {
    fileNameOrErrorMessage: 'No file selected',
    text: '',
    summary: {
        character_count: 0,
        character_and_space_count: 0,
        word_count: 0, 
        line_number: 0
    }
}

const copyFileAndShowSummary = (state: AppState = initialState, action: any) => {
    switch (action.type) {
        
        case types.COPY_FILE_CONTENTS:
            let copy_action: CopyFileContents = action;
            return ES6.Object.assign({}, state, {
                fileNameOrErrorMessage: copy_action.fileName,
                text: copy_action.contents
            })
        
        case types.REJECT_FILE:
            let reject_action: RejectFile = action;
            return ES6.Object.assign({}, state, {
                fileNameOrErrorMessage: reject_action.errorMessage
            })
        
        case types.SHOW_TEXT_SUMMARY:
            let summarize_action: ShowTextSummary = action;
            let line_number = summarize_action.text.split('\n').length;
            if (summarize_action.text === "") {
                line_number = 0
            }
            let char_and_space_count = summarize_action.text.length;
            // convert [\r\n\t\s]+ to spaces
            let text = summarize_action.text.replace(/[\r\n\t\s]+/g, " ").trim();
            let word_count = text.split(" ").length;
            if (text === "") {
                word_count = 0
            }
            // remove spaces
            text = text.replace(/ /g, "");
            let char_count = text.length;
            return ES6.Object.assign({}, state, {
                text: summarize_action.text,
                summary: {
                    character_count: char_count,
                    character_and_space_count: char_and_space_count,
                    word_count: word_count,
                    line_number: line_number
                }
            })
        
        default:
            return state
    
    }
}

export default copyFileAndShowSummary
