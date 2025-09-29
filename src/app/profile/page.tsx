'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

// Components
import LoadingState from './components/LoadingState';
import ProfileHeader from './components/ProfileHeader';
import ProfileNavigation from './components/ProfileNavigation';
import ProfileForm from './components/ProfileForm';
import OrdersSection from './components/OrdersSection';

// Types
import type { Order, FormData, TabType } from './types';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const { user, isAuthenticated, updateProfile, loading } = useAuth();
  const router = useRouter();
  
  // Проверяем URL параметры для переключения вкладок
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab && ['profile', 'orders'].includes(tab)) {
      setActiveTab(tab as TabType);
    }
  }, []);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [updateError, setUpdateError] = useState('');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login');
    } else if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || ''
      }));
    }
  }, [isAuthenticated, user, router, loading]);

  // Загрузка заказов при переключении на вкладку заказов
  useEffect(() => {
    if (activeTab === 'orders' && isAuthenticated) {
      loadOrders();
    }
  }, [activeTab, isAuthenticated]);

  const loadOrders = async () => {
    setOrdersLoading(true);
    try {
      const response = await fetch('/api/user/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders);
      } else {
        console.error('Failed to load orders');
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setOrdersLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdateMessage('');
    setUpdateError('');
    
    try {
      const result = await updateProfile(formData.name, formData.phone);
      
      if (result.success) {
        setUpdateMessage('Профиль успешно обновлен');
        setTimeout(() => setUpdateMessage(''), 3000);
      } else {
        setUpdateError(result.error || 'Ошибка обновления профиля');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setUpdateError('Ошибка соединения с сервером');
    } finally {
      setIsUpdating(false);
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

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <ProfileHeader user={user} />

        <div className={styles.profileLayout}>
          <ProfileNavigation 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <div className={styles.mainContent}>
            {activeTab === 'profile' && (
              <ProfileForm
                formData={formData}
                isUpdating={isUpdating}
                updateMessage={updateMessage}
                updateError={updateError}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            )}

            {activeTab === 'orders' && (
              <OrdersSection 
                orders={orders}
                isLoading={ordersLoading}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 