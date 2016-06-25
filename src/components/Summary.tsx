import * as React from 'react'

export interface SummaryProps extends React.Props<any> {
    character_count: number,
    character_and_space_count: number,
    word_count: number,
    line_number: number
}

export default class Summary extends React.Component<SummaryProps, any> {

    render () {
        return (
            <div>
                <li>character count: {this.props.character_count}</li>
                <li>character and space count: {this.props.character_and_space_count}</li>
                <li>word count: {this.props.word_count}</li>
                <li>line number: {this.props.line_number}</li>
            </div>
        );
    }
}
