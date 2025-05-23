
export interface Mix {
  id: number;
  title: string;
  dj: string;
  genre: string;
  year: string;
  imageUrl: string;
}

// Mix categories with ALL option added at the beginning
export const categories = ['ALL', 'UGANDAN REGGAE', 'ROOTS', 'DUB', 'LOVERS ROCK', 'DANCEHALL'];

// Sample data for mixes
export const featuredMixes: Mix[] = [
  {
    id: 1,
    title: 'Roots Vibration Vol 3',
    dj: 'DJ Simba',
    genre: 'ROOTS',
    year: '2024',
    imageUrl: '/reggae-dj.jpg',
  },
  {
    id: 2,
    title: 'Dub Masters Mix',
    dj: 'Natasi',
    genre: 'DUB',
    year: 'FEB 2024',
    imageUrl: '/reggae-artwork.jpg',
  },
  {
    id: 3,
    title: 'Dancehall Fever',
    dj: 'Deelay Kiln',
    genre: 'DANCEHALL',
    year: 'FEB 2024',
    imageUrl: '/reggae-drums.jpg',
  },
  {
    id: 4,
    title: 'Uganda Rising Stars',
    dj: 'MC Yallah',
    genre: 'UGANDAN REGGAE',
    year: 'MAR 2024',
    imageUrl: '/reggae-concert1.jpg',
  },
  {
    id: 5,
    title: 'Love & Harmony',
    dj: 'Sister Rose',
    genre: 'LOVERS ROCK',
    year: 'APR 2024',
    imageUrl: '/reggae-beach.jpg',
  },
  {
    id: 6,
    title: 'Roots Revival Sessions',
    dj: 'DJ Simba',
    genre: 'ROOTS',
    year: 'JAN 2024',
    imageUrl: '/reggae-crowd.jpg',
  },
];
