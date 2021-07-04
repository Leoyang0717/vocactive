import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CollectionLists from './CollectionLists';
import AddCollectionButton from './AddCollectionButton';
import AddWordsButton from '@/Ｗord/AddWordButton';

function Collection(props) {
  const { collections } = props
    return (
      <div>
        <div className="flex">
          <AddCollectionButton />
          <AddWordsButton />
        </div>
        <h3>近期學習集</h3>
        <div className="grid grid-cols-5 gap-4 mx-4">
          {
            collections.map(collection => {
              return(
                <CollectionLists
                key={collection.id}
                id={collection.id}
                title={collection.title}
                quantity={collection.count_words}
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
