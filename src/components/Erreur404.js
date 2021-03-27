const Erreur404 = props => {
    return (
        <div className="text-center">
            <img src={process.env.PUBLIC_URL + `/assets/error404.png`} alt="page 404" width="300" />
            <p>La page que vous cherchez n'existe pas </p>
        </div>
    )

}

export default Erreur404