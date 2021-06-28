import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CollectionLists from './CollectionLists';
import AddCollectionButton from './AddCollectionButton';
import AddWordsButton from '@/Ｗord/AddWordButton';

const Collection = (props) => {
  const { collections } = props
    return (
      <div>
        <div className="flex">
          <AddCollectionButton />
          <AddWordsButton />
        </div>
        <div className="flex">
          {
            collections.map(collection => {
              return(
                <CollectionLists
                key={collection.id}
                id={collection.id}
                title = {collection.title}
                description = {collection.description}
                />
              );
            })
          }
        </div>
      </div>
    )
};

Collection.propTypes = {
  collections: PropTypes.array.isRequired, // this is passed from the Rails view
};

export default Collection;
