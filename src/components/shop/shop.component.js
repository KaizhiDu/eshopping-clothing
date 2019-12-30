import React from 'react';
import { createStructuredSelector } from "reselect";
import { selectShops } from "../../redux/shop/shop.selectors";
import { connect } from 'react-redux';
import CollectionOverview from "../collection-overview/collection-overview.component";
import { Route } from 'react-router-dom';
import CollectionPage from "../collection/collection-page.component";

const ShopPage = ({match}) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShops
});

export default connect(mapStateToProps)(ShopPage);