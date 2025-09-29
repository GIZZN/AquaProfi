import React from 'react';
import type { Product, Category } from '../types';

// Централизованное хранилище товаров для всего приложения
export const productsData: Product[] = [
  {
    id: 1,
    name: 'Смеситель GROHE Eurosmart',
    price: 15999,
    image: '/images/products/placeholder1.jpg',
    category: 'Смесители',
    rating: 4.8,
    slug: 'grohe-eurosmart-faucet'
  },
  {
    id: 2,
    name: 'Унитаз-компакт Ideal Standard',
    price: 24999,
    image: '/images/products/placeholder2.jpg',
    category: 'Унитазы',
    rating: 4.6,
    slug: 'ideal-standard-toilet'
  },
  {
    id: 3,
    name: 'Акриловая ванна Ravak 170x75',
    price: 35999,
    image: '/images/products/placeholder3.jpg',
    category: 'Ванны',
    rating: 4.9,
    slug: 'ravak-acrylic-bathtub'
  },
  {
    id: 4,
    name: 'Душевая кабина Edelform 90x90',
    price: 48999,
    image: '/images/products/placeholder4.jpg',
    category: 'Душевые кабины',
    rating: 4.7,
    slug: 'edelform-shower-cabin'
  },
  {
    id: 5,
    name: 'Труба металлопластиковая 20мм',
    price: 899,
    image: '/images/products/placeholder5.jpg',
    category: 'Трубы и фитинги',
    rating: 4.5,
    slug: 'metal-plastic-pipe-20mm'
  },
  {
    id: 6,
    name: 'Раковина керамическая Sanita',
    price: 8999,
    image: '/images/products/placeholder6.jpg',
    category: 'Раковины',
    rating: 4.4,
    slug: 'sanita-ceramic-sink'
  },
  {
    id: 7,
    name: 'Смеситель для ванны Hansgrohe',
    price: 32999,
    image: '/images/products/placeholder7.jpg',
    category: 'Смесители',
    rating: 4.7,
    slug: 'hansgrohe-bath-faucet'
  },
  {
    id: 8,
    name: 'Полотенцесушитель Zehnder',
    price: 18999,
    image: '/images/products/placeholder9.jpg',
    category: 'Аксессуары',
    rating: 4.6,
    slug: 'zehnder-towel-warmer'
  },
  {
    id: 9,
    name: 'Инсталляция для унитаза Geberit',
    price: 12999,
    image: '/images/products/placeholder8.jpg',
    category: 'Инсталляции',
    rating: 4.8,
    slug: 'geberit-toilet-installation'
  },
  {
    id: 10,
    name: 'Смеситель термостатический Grohe',
    price: 45999,
    image: '/images/products/placeholder10.jpg',
    category: 'Смесители',
    rating: 4.9,
    slug: 'grohe-thermostatic-faucet'
  },
  {
    id: 11,
    name: 'Душевая стойка Ravak',
    price: 14999,
    image: '/images/products/placeholder11.jpg',
    category: 'Душевые кабины',
    rating: 4.5,
    slug: 'ravak-shower-stand'
  },
  {
    id: 12,
    name: 'Мойка из нержавейки Blanco',
    price: 7999,
    image: '/images/products/placeholder12.jpg',
    category: 'Раковины',
    rating: 4.3,
    slug: 'blanco-stainless-sink'
  }
];

// Категории товаров
export const categoriesData: Category[] = [
  { 
    id: 1, 
    name: 'Смесители', 
    slug: 'faucets',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8v4l-2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8l-2-2V2z"/>
        <path d="M6 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"/>
        <circle cx="12" cy="18" r="1"/>
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'Унитазы', 
    slug: 'toilets',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/>
        <path d="M4 12h16"/>
        <path d="M12 4v16"/>
        <path d="M8 8v8"/>
        <path d="M16 8v8"/>
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'Ванны', 
    slug: 'bathtubs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20"/>
        <path d="M2 12a10 10 0 0 0 20 0"/>
        <path d="M7 12V8a5 5 0 0 1 10 0v4"/>
        <circle cx="7" cy="19" r="2"/>
        <circle cx="17" cy="19" r="2"/>
      </svg>
    )
  },
  { 
    id: 4, 
    name: 'Душевые кабины', 
    slug: 'shower-cabins',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h.01"/>
        <path d="M15 9h.01"/>
        <path d="M12 12h.01"/>
        <path d="M9 15h.01"/>
        <path d="M15 15h.01"/>
      </svg>
    )
  },
  { 
    id: 5, 
    name: 'Трубы и фитинги', 
    slug: 'pipes-fittings',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z"/>
        <path d="M8 8h8v8H8z"/>
        <path d="M12 4v4"/>
        <path d="M12 16v4"/>
        <path d="M4 12h4"/>
        <path d="M16 12h4"/>
      </svg>
    )
  },
  { 
    id: 6, 
    name: 'Раковины', 
    slug: 'sinks',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="14" rx="8" ry="6"/>
        <path d="M12 8v6"/>
        <circle cx="12" cy="8" r="2"/>
      </svg>
    )
  },
  { 
    id: 7, 
    name: 'Аксессуары', 
    slug: 'accessories',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  { 
    id: 8, 
    name: 'Инсталляции', 
    slug: 'installations',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M7 7h10v10H7z"/>
      </svg>
    )
  }
];

// Список названий категорий для фильтров
export const categoryNames = ['Все', ...categoriesData.map(cat => cat.name)];

// Мапинг слагов к названиям категорий
export const categorySlugMap: { [key: string]: string } = {
  'faucets': 'Смесители',
  'toilets': 'Унитазы',
  'bathtubs': 'Ванны',
  'shower-cabins': 'Душевые кабины',
  'pipes-fittings': 'Трубы и фитинги',
  'sinks': 'Раковины',
  'accessories': 'Аксессуары',
  'installations': 'Инсталляции'
};

// Функции для работы с данными
export const getProductById = (id: number): Product | undefined => {
  return productsData.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'Все') {
    return productsData;
  }
  return productsData.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  return productsData.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};

export const getCategoryBySlug = (slug: string): string => {
  return categorySlugMap[slug] || 'Все';
};
