import Modal from "./Modal"
const Card = ({ product}) => {

    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                    width="170"
                    height="170"
                    src={process.env.PUBLIC_URL + `/assets/${product.category}/${product.image}`}
                    alt={product.name}
                />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{product.name}</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>{product.price}€/{product.unit}
                            </p>
                            <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${product.ref}`} >view product</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                <Modal item={product}/>
            }
        </div>
    );
}

export default Card