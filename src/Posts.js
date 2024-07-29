import Post from './Post';

const postsData = [
    {
        usuario: { nome: 'meowed', img: '/assets/img/meowed.svg' },
        imgPost: '/assets/img/gato-telefone.svg',
        imgCurtida: '/assets/img/respondeai.svg',
        curtidoPor: 'respondeai',
        curtidas: '101.523'
    },
    {
        usuario: { nome: 'barked', img: '/assets/img/barked.svg' },
        imgPost: '/assets/img/dog.svg',
        imgCurtida: '/assets/img/adorable_animals.svg',
        curtidoPor: 'adorable_animals',
        curtidas: '99.159'
    }
];

export default function Posts() {
    return (
        <>
            <div className="posts">
                {postsData.map((post, index) => (
                    <Post
                        key={index}
                        usuario={post.usuario}
                        imgPost={post.imgPost}
                        imgCurtida={post.imgCurtida}
                        curtidoPor={post.curtidoPor}
                        curtidas={post.curtidas}
                    />
                ))}
            </div>
        </>
    )
}