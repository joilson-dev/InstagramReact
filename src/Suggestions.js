import Suggestion from './Suggestion';


const sugestoesData = [
    {
        imgSrc: 'assets/img/bad.vibes.memes.svg',
        nome: 'bad.vibes.memes',
        razao: 'Segue você'
    },
    {
        imgSrc: 'assets/img/chibirdart.svg',
        nome: 'chibirdart',
        razao: 'Segue você'
    },
    {
        imgSrc: 'assets/img/razoesparaacreditar.svg',
        nome: 'razoesparaacreditar',
        razao: 'Novo no Instagram'
    },
    {
        imgSrc: 'assets/img/adorable_animals.svg',
        nome: 'adorable_animals',
        razao: 'Segue você'
    },
    {
        imgSrc: 'assets/img/smallcutecats.svg',
        nome: 'smallcutecats',
        razao: 'Segue você'
    },
];

export default function Suggestions() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoesData.map((sugestao, index) => (
                <Suggestion
                    key={index}
                    imgSrc={sugestao.imgSrc}
                    nome={sugestao.nome}
                    razao={sugestao.razao}
                />
            ))}
        </div>
    );
}