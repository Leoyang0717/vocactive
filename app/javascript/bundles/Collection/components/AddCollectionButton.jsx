import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddCollectionButton = (props) => {
    return (
      <a href="/collections/new" className="block border">
        新增學習集
      </a>
    )
};

AddCollectionButton.propTypes = {
  // collections: PropTypes.array.isRequired, // this is passed from the Rails view
};

export default AddCollectionButton;
