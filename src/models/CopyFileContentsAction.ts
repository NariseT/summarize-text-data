import ActionBase from './ActionBase'

interface CopyFileContents extends ActionBase {
    fileName: string;
    contents: string;
}

export default CopyFileContents;
