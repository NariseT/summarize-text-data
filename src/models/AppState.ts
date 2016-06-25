export default class AppState {
    fileNameOrErrorMessage: string;
    text: string;
    summary: {
        character_count: number,
        character_and_space_count: number,
        word_count: number, 
        line_number: number
    }
}
