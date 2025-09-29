'use client';

import React from 'react';
import styles from './page.module.css';
import { useFavorites } from '@/context/FavoritesContext';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Components
import LoadingState from './components/LoadingState';
import UnauthorizedState from './components/UnauthorizedState';
import EmptyFavorites from './components/EmptyFavorites';
import FavoritesHeader from './components/FavoritesHeader';
import FavoritesList from './components/FavoritesList';

// Types
import type { FavoriteItem, CartItem } from './types';

export default function FavoritesPage() {
  const { items, removeFromFavorites, loading } = useFavorites();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  // Если пользователь не авторизован, показываем соответствующий компонент
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <UnauthorizedState />
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = async (item: FavoriteItem) => {
    const cartItem: CartItem = {
      id: parseInt(item.product_id),
      name: item.product_name,
      price: item.product_price,
      image: item.product_image
    };
    await addToCart(cartItem);
  };

  const handleRemoveFromFavorites = async (productId: string) => {
    await removeFromFavorites(productId);
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <LoadingState />
        </main>
        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <EmptyFavorites />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <FavoritesHeader itemsCount={items.length} />
        <FavoritesList 
          items={items}
          onAddToCart={handleAddToCart}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      </main>
      <Footer />
    </>
  );
}
