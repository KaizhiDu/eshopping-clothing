import React, { Component } from 'react';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShops } from "../../redux/shop/shop.selectors";
import { connect } from 'react-redux';

class ShopPage extends Component {

  render() {
    return (
      <div>
        {
          this.props.collections.map(collection => (
            <CollectionPreview key={collection.id} collection={collection}></CollectionPreview>
          ))
        }
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  collections: selectShops
});

export default connect(mapStateToProps)(ShopPage);