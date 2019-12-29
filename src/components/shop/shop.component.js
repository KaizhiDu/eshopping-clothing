import React, { Component } from 'react';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShops } from "../../redux/shop/shop.selectors";
import { connect } from 'react-redux';
import CollectionOverview from "../collection-overview/collection-overview.component";

class ShopPage extends Component {

  render() {
    return (
      <div>
        <CollectionOverview collections={this.props.collections}/>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  collections: selectShops
});

export default connect(mapStateToProps)(ShopPage);