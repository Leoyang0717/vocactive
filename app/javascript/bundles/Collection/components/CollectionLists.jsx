import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CollectionLists = (props) => {
  const { id, title, description } = props;
    return (
      <div className="border border-1">
        <a href={`/collections/${id}`}>
          <div>
            <p>學習集名稱：{title}</p>
            <span>描述: {description}</span>
          </div>
        </a>
      </div>
    );
};

CollectionLists.propTypes = {
  title: PropTypes.string, // this is passed from the Rails view
  description: PropTypes.string, // this is passed from the Rails view
};

export default CollectionLists;
