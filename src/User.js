import React, { useState } from 'react';

export default function User() {
    const initialUserData = {
        imgSrc: '/assets/img/catanacomics.svg',
        name: 'catanacomics'
    };

    const [userData, setUserData] = useState(initialUserData);

    const handleNameChange = () => {
        const newName = prompt('Digite o novo nome de usuário:');
        if (newName && newName.trim() !== '') {
            setUserData({ ...userData, name: newName });
        }
    };
    const handleImgChange = () => {
        const newImgSrc = prompt('Digite o novo link da imagem de perfil:');
        if (newImgSrc && newImgSrc.trim() !== '') {
            setUserData({ ...userData, imgSrc: newImgSrc });
        }
    };



    return (
        <div className="usuario">
            <img src={userData.imgSrc} alt="imagem de perfil " onClick={handleImgChange} />
            <div className="texto">
                <span>
                    <strong>{userData.name}</strong>
                    <ion-icon name="pencil" role="img" className="md hydrated" aria-label="pencil" onClick={() => {
                        handleNameChange();
                    }}></ion-icon>
                </span>
            </div>
        </div>
    );
}