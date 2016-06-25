import * as React from 'react';
import FileDropzoneContainer from '../containers/FileDropzoneContainer';
import TextAreaContainer from '../containers/TextAreaContainer';
import SummaryContainer from '../containers/SummaryContainer';

const App = () => (
  <div>
    <FileDropzoneContainer />
    <TextAreaContainer />
    <SummaryContainer />
  </div>
)

export default App
