import React from 'react';
import Post from './Post';

const postsData = [
    {
        usuario: { nome: 'smallcutecats', img: 'assets/img/smallcutecats.svg' },
        imgPost: 'assets/img/gatos.jpeg',
        imgCurtida: 'assets/img/razoesparaacreditar.svg',
        curtidoPor: 'chibirdart',
        curtidas: '199.159',
        toSalve: false
    },
    {
        usuario: { nome: 'barked', img: '/assets/img/barked.svg' },
        imgPost: '/assets/img/dog.svg',
        imgCurtida: '/assets/img/adorable_animals.svg',
        curtidoPor: 'adorable_animals',
        curtidas: '99.159',
        toSalve: false
    },
    {
        usuario: { nome: 'meowed', img: '/assets/img/meowed.svg' },
        imgPost: '/assets/img/gato-telefone.svg',
        imgCurtida: '/assets/img/respondeai.svg',
        curtidoPor: 'respondeai',
        curtidas: '101.523',
        toSalve: false
    }
];

export default function Posts() {
    return (
        <div className="posts">
            {postsData.map((post, index) => (
                <Post
                    key={index}
                    usuario={post.usuario}
                    imgPost={post.imgPost}
                    imgCurtida={post.imgCurtida}
                    curtidoPor={post.curtidoPor}
                    curtidas={post.curtidas}
                    toSalve={post.toSalve}
                />
            ))}
        </div>
    );
}
