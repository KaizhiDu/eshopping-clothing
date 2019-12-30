import React from 'react';
import {connect} from 'react-redux';

import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShops } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
  <div className='collection-overview'>
    {
      collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection}></CollectionPreview>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShops
});

export default connect(mapStateToProps)(CollectionOverview);