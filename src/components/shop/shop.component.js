import React, { Component } from 'react';
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../collection-preview/collection-preview.component";

class ShopPage extends Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {

        return (
            <div>
                {
                    this.state.collections.map(collection => (
                        <CollectionPreview key={collection.id} collection={collection}></CollectionPreview>
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;