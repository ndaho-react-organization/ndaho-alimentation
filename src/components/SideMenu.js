import React from 'react';

const SideMenu = ({ search, category }) => {
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boisons"]
    return (
        <div className="col-sm-2 sidebar">
            <ul>
                {
                    links.map((link, index) => {
                        return (<li className={category===index && 'active'} onClick={() => search(index)} key={link}>{link}</li>)
                    })
                }
            </ul>

        </div>
    );

}

export default SideMenu