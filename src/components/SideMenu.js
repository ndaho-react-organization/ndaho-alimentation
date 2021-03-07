import React from 'react';

const SideMenu = (props) => {
    const links = ["Légumes", "Fruits", "Boisons"]
    return (
        <div className="col-sm-2 sidebar">
            <ul>
                {
                    links.map((link) => {
                        return (<li key={link}>{link}</li>)
                    })
                }

            </ul>

        </div>
    );

}

export default SideMenu