import React from 'react';
import Card from './Card';

const Products = ({ data, addTocart }) => {
    return (
        <div className="col-sm">
            <div className="row">
                {data && data.map(item => <Card key={item.ref} product={item} addTocart={addTocart} />
                )}
            </div>
        </div>

    );
}

export default Products