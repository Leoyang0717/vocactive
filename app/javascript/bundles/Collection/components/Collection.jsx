import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CollectionGroups from './CollectionGroups';

const Collection = (props) => {
  const { collections } = props
    return (
      <React.Fragment>
        {
          collections.map(collection => {
            return(
              <CollectionGroups
              key={collection.id}
              title = {collection.title}
              description = {collection.description}
              />
            );
          })
        }
      </React.Fragment>
    )
};

Collection.propTypes = {
  collections: PropTypes.array.isRequired, // this is passed from the Rails view
};

export default Collection;
