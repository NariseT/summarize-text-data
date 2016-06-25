import * as React from 'react'

export interface TextAreaProps extends React.Props<any> {
    showTextSummaryProp: any,
    text: string
}

export default class TextArea extends React.Component<TextAreaProps, any> {
    private showTextSummary = (e) => {
        this.props.showTextSummaryProp(e.target.value)
    };
    
    render () {
        return (
            <div>
                <textarea type="text" onChange={this.showTextSummary} value={this.props.text} />
            </div>
        );
    }
}
