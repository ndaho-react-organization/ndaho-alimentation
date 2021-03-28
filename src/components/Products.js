import React from 'react';
import Card from './Card';

const Products = ({ data }) => {
    return (
        <div className="col-sm">
            <div className="row">
                {data && data.map(item => <Card key={item.ref} product={item} />
                )}
            </div>
        </div>

    );
}

export default Products