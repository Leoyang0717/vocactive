import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

import Collection from '../bundles/Collection/components/Collection'
import CollectionGroups from '../bundles/Collection/components/CollectionLists'
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Collection,
});
