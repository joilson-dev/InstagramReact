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



    return (
        <div className="usuario">
            <img src={userData.imgSrc} alt="imagem de perfil" />
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