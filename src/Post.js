import React, { useState } from 'react';

export default function Post({ usuario, imgPost, imgCurtida, curtidoPor, curtidas, toSalve }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(toSalve);
    const [likesCount, setLikesCount] = useState(parseInt(curtidas.replace('.', '')));

    const handleLikeClick = () => {
        if (liked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setLiked(!liked);
    };

    const handleImageClick = () => {
        if (!liked) {
            setLikesCount(likesCount + 1);
            setLiked(true);
        }
    };

    const handleSaveClick = () => {
        setSaved(!saved);
    };

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={usuario.img} alt={usuario.nome} />
                    {usuario.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal" role="img" className="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={handleImageClick}>
                <img src={imgPost} alt="post content" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            name={liked ? "heart" : "heart-outline"}
                            style={{ color: liked ? 'red' : 'black' }}
                            onClick={handleLikeClick}
                            role="img"
                            className="md hydrated"
                            aria-label="heart outline">
                        </ion-icon>
                        <ion-icon name="chatbubble-outline" role="img" className="md hydrated" aria-label="chatbubble outline"></ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" className="md hydrated" aria-label="paper plane outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            name={saved ? "bookmark" : "bookmark-outline"}
                            onClick={handleSaveClick}
                            role="img"
                            className="md hydrated"
                            aria-label="bookmark outline">
                        </ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imgCurtida} alt="curtido por" />
                    <div className="texto">
                        Curtido por <strong>{curtidoPor}</strong> e <strong>outras {likesCount.toLocaleString()} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
