import React from 'react';

export default function Post({ usuario, imgPost, imgCurtida, curtidoPor, curtidas }) {
    return (
        <>
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

                <div className="conteudo">
                    <img src={imgPost} alt="post content" />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline" role="img" className="md hydrated" aria-label="heart outline"></ion-icon>
                            <ion-icon name="chatbubble-outline" role="img" className="md hydrated" aria-label="chatbubble outline"></ion-icon>
                            <ion-icon name="paper-plane-outline" role="img" className="md hydrated" aria-label="paper plane outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline" role="img" className="md hydrated" aria-label="bookmark outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={imgCurtida} alt="curtido por" />
                        <div className="texto">
                            Curtido por <strong>{curtidoPor}</strong> e <strong>outras {curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};