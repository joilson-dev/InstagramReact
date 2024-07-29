
export default function Story({ src, usuario }) {
    return (
        <>
            <div className="story">
                <div className="imagem">
                    <img src={src} alt={usuario} />
                </div>
                <div className="usuario">
                    {usuario}
                </div>
            </div>
        </>
    )

}