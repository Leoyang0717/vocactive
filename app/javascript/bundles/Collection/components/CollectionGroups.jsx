import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CollectionGroups = (props) => {
  const { title, description } = props;
    return (
      <div className="border border-1">
        <p>學習集名稱：{title}</p>
        <span>描述: {description}</span>
      </div>
    );
};

CollectionGroups.propTypes = {
  title: PropTypes.string, // this is passed from the Rails view
  description: PropTypes.string, // this is passed from the Rails view
};

export default CollectionGroups;
