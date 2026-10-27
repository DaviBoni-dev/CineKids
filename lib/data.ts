export type Episode = { title: string; duration: string; image: string }
export type Show = { id: string; title: string; category: string; image: string; accent: string; description: string; episodes: Episode[] }

export const shows: Show[] = [
  { id: 'backyardigans', title: 'Os Backyardigans', category: 'Aventura', image: '/fundobackyardigans.jpg', accent: '#7c5cff', description: 'Cinco animaizinhos coloridos viajam para lugares imaginários e vivem grandes aventuras no quintal de casa. Os episódios apresentam musicais de gêneros diferentes e dança.', episodes: [
    { title: 'O portal secreto', duration: '12 min', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85' },
    { title: 'A festa das estrelas', duration: '10 min', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85' },
    { title: 'O mapa perdido', duration: '13 min', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85' },
  ] },
  { id: 'peixonauta', title: 'Peixonauta', category: 'Aventura', image: '/peixonautafundo.jpg', accent: '#ff8b3d', description: `O agente secreto Peixonauta possui um traje especial que o permite voar e respirar fora d'água. O peixe é um detetive profissional que conta com a ajuda de seus amigos Marina, uma criança, e Zico, um macaco. Juntos, eles vivem incríveis aventuras no Parque das Árvores Felizes, dentro e fora d'água. Os mistérios são resolvidos com a ajuda da Pop, uma bola mágica e colorida que sempre envia pistas para os três.`, episodes: [
    { title: 'Cadê a borboleta?', duration: '8 min', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=700&q=85' },
    { title: 'O piquenique', duration: '9 min', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85' },
  ] },
  { id: 'mecanimais', title: 'Mecanimais', category: 'Aventura', image: '/mecafundo.jpg', accent: '#ed5aa8', description: 'Esta animação, especificamente concebida para pré-escolares, conta as aventuras de uma equipe de animais robôs com superpoderes que partem em aventuras para ajudarem uns aos outros e, ao mesmo tempo, vão aprendendo coisas novas.', episodes: [
    { title: 'Código amizade', duration: '11 min', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=85' },
    { title: 'A corrida maluca', duration: '10 min', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=85' },
  ] },
  { id: 'mecanimais', title: 'Mecanimais', category: 'Aventura', image: 'mecafundo.jpg', accent: '#ed5aa8', description: 'Esta animação, especificamente concebida para pré-escolares, conta as aventuras de uma equipe de animais robôs com superpoderes que partem em aventuras para ajudarem uns aos outros e, ao mesmo tempo, vão aprendendo coisas novas.', episodes: [
    { title: 'Código amizade', duration: '11 min', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=85' },
    { title: 'A corrida maluca', duration: '10 min', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=85' },
  ] },
]