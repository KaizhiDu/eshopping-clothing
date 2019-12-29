import React from 'react';
import {connect} from 'react-redux';

import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => (
  <div className='collection-overview'>
    {
      collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection}></CollectionPreview>
      ))
    }
  </div>
);

export default CollectionOverview;