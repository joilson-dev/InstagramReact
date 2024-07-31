export default function Suggestion({ id, imgSrc, nome, razao }) {
    return (
        <>
            <div className="sugestao">
                <div className="usuario">
                    <img src={imgSrc} />
                    <div className="texto">
                        <div className="nome">{nome}</div>
                        <div className="razao">{razao}</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
        </>
    )
}