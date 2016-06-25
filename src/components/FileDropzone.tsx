import * as React from 'react'
import * as Dropzone from 'react-dropzone';

export interface FileDropzoneProps extends React.Props<any> {
    fileNameOrErrorMessage: string,
    copyFileContentsProp: any,
    rejectFileProp: any,
    showTextSummaryProp: any
}

export default class FileDropzone extends React.Component<FileDropzoneProps, any> {
    
    private onDropAccepted = (files) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            let fileName = files[0].name;
            let contents = reader.result;
            this.props.copyFileContentsProp(fileName, contents);
            this.props.showTextSummaryProp(contents);
        }
        reader.readAsText(files[0]);
    };
    
    private onDropRejected = () => {
        let errorMessage = 'This file is not valid.';
        this.props.rejectFileProp(errorMessage);
    };
    
    render () {
        return (
            <div>
                <Dropzone 
                    onDropAccepted = {this.onDropAccepted}
                    onDropRejected = {this.onDropRejected} 
                    accept = "text/plain" 
                    multiple = {false}
                >
                    <div>Try dropping a text file here, or click to select a file to upload.</div>
                </Dropzone>
                <div>
                    <h1>{this.props.fileNameOrErrorMessage}</h1>
                </div>
            </div>
        );
    }
}
