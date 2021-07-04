import PropTypes from 'prop-types';
import React, { useState } from 'react';

function CollectionLists(props) {
  const { id, title, quantity } = props;
    return (
      <div className="bg-third collection-box">
        <a href={`/collections/${id}`}>
          <div className="font-medium">
            <p className="py-2">{title}</p>
            <p className="pb-2 text-sm text-gray-500">{quantity}個詞語</p>
          </div>
        </a>
      </div>
    );
};

CollectionLists.propTypes = {
  title: PropTypes.string, // this is passed from the Rails view
  quantity: PropTypes.number,
};

export default CollectionLists;
