interface Post {
    title: string;
    subtitle: string;
}

// Record<Keys, Type>
type Props = 'sports' | 'nutrition' | 'movies'; // Propriedades
type PostsRecord = Record<Props, Post[]> // [array] de Post

const PostsMappedBySections: PostsRecord = { // Obj: Posts mapeados por seções
    sports: [
        {
            title: 'Espanha: Barcelona vence Real Madrid!',
            subtitle: 'Com gols de Ronaldinho Gaúcho...'
        },
    ],

    nutrition: [
        {
            title: 'FastFood e a obesidade nos estados Unidos!',
            subtitle: 'McDonalds ou BurgerKing? Essa é a...'
        },
    ],

    movies: []
}

