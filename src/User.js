export default function User() {
    const userData = {
        imgSrc: '/assets/img/catanacomics.svg',
        name: 'catanacomics'
    };

    return (
        <div className="usuario">
            <img src={userData.imgSrc} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{userData.name}</strong>
                    <ion-icon name="pencil" role="img" className="md hydrated" aria-label="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}