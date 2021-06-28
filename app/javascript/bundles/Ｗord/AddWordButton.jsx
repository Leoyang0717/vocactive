import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddWordsButton = (props) => {
    return (
      <a href="/words/new" className="block border">
        新增字卡
      </a>
    )
};

AddWordsButton.propTypes = {
  // Wordss: PropTypes.array.isRequired, // this is passed from the Rails view
};

export default AddWordsButton;
