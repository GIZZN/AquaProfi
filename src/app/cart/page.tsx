'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';

// Components
import LoadingState from './components/LoadingState';
import UnauthorizedState from './components/UnauthorizedState';
import EmptyCart from './components/EmptyCart';
import CartHeader from './components/CartHeader';
import CartItems from './components/CartItems';
import OrderSummary from './components/OrderSummary';
import ErrorMessage from './components/ErrorMessage';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart, createOrder, loading } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderError, setOrderError] = useState('');

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    setIsOrdering(true);
    setOrderError('');

    try {
      const result = await createOrder();
      
      if (result.success) {
        router.push('/profile?tab=orders');
      } else {
        setOrderError(result.error || 'Ошибка при создании заказа');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setOrderError('Ошибка при создании заказа');
    } finally {
      setIsOrdering(false);
    }
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

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <EmptyCart />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <CartHeader items={items} onClearCart={clearCart} />
        
        <ErrorMessage message={orderError} />

        <div className={styles.cartLayout}>
          <CartItems 
            items={items}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />

          <OrderSummary
            items={items}
            totalPrice={totalPrice}
            isOrdering={isOrdering}
            onCheckout={handleCheckout}
          />
        </div>
      </main>
      <Footer />
    </>
  );
} 