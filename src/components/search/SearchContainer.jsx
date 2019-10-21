import React from 'react';
import KeywordsInput from './KeywordsInput';
import Button from '@material-ui/core/Button';

const SearchContainer = ({
  handleTextChange,
  textToSearch,
  isGetButtonDisabled,
  getIssues,
  onReset,
}) => (
  <div>
    <KeywordsInput handleTextChange={handleTextChange} textToSearch={textToSearch} />
    <Button
      className="get-btn"
      color="primary"
      variant="contained"
      disabled={isGetButtonDisabled}
      onClick={getIssues}
      type="submit"
      size="large"
    >
      Load Issues
    </Button>
    <Button
      color="secondary"
      variant="contained"
      className="reset-btn"
      onClick={onReset}
      size="large"
    >
      Reset
    </Button>
  </div>
);

export default SearchContainer;
