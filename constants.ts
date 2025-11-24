import { BlogPost } from "./types";

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Modern Dünyada Stoacılık',
    excerpt: 'Kaosun ortasında iç huzuru bulmak mümkün mü? Marcus Aurelius\'un günlüklerinden modern ofis hayatına uzanan bir rehber.',
    content: 'Stoacılık sadece acıya katlanmak değildir; neyi kontrol edebileceğimizi ve neyi edemeyeceğimizi ayırt etme sanatıdır...',
    author: 'Deniz Bilge',
    date: '12 Ekim 2023',
    tags: ['Stoacılık', 'Kişisel Gelişim', 'Etik'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    readTime: '5 dk'
  },
  {
    id: '2',
    title: 'Yapay Zeka Düşünebilir mi?',
    excerpt: 'Turing testinden Çin Odası argümanına, makine bilincinin felsefi sınırlarını keşfediyoruz.',
    content: 'Eğer bir makine insan gibi davranıyorsa, onun bilinci olmadığını iddia edebilir miyiz? Descartes bugün yaşasaydı ne derdi?',
    author: 'Ada Lovelace',
    date: '15 Ekim 2023',
    tags: ['Teknoloji', 'Zihin Felsefesi', 'Gelecek'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    readTime: '8 dk'
  },
  {
    id: '3',
    title: 'Absürdizm ve Sabah Kahvesi',
    excerpt: 'Camus, Sisifos ve her sabah yataktan kalkma eyleminin anlamsızlığına karşı bir başkaldırı olarak kahve içmek.',
    content: 'Hayatın anlamsız olması, onun yaşanmaya değer olmadığı anlamına gelmez. Tam tersine, anlamı biz yaratırız.',
    author: 'Albert C.',
    date: '18 Ekim 2023',
    tags: ['Varoluşçuluk', 'Absürdizm', 'Yaşam'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    readTime: '6 dk'
  }
];
