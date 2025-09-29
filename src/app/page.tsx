'use client';

import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

// Components
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';

// Types
import type { Product } from './types';


export default function Home() {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      
      <HeroSection />
      <AdvantagesSection />
      
      <main className={styles.main}>
        <CategoriesSection />
        <ProductsSection 
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </main>
      
      <Footer />
    </div>
  );
}
