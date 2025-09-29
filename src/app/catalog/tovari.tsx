'use client';

import React, { useState, useMemo, useEffect } from 'react';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useSearchParams } from 'next/navigation';

// Components
import CatalogSidebar from './components/CatalogSidebar';
import CatalogHeader from './components/CatalogHeader';
import ProductGrid from './components/ProductGrid';

// Data and types
import { productsData, categoryNames, getCategoryBySlug } from '@/app/data/products';
import type { PriceRange, SortOption } from './types';
import type { Product } from '@/app/types';

export default function Tovari() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: '', max: '' });
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, items } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const searchParams = useSearchParams();

  // Получаем поисковый запрос и категорию из URL
  useEffect(() => {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (search) {
      setSearchQuery(search);
    }
    
    if (category) {
      const categoryName = getCategoryBySlug(category);
      if (categoryName && categoryNames.includes(categoryName)) {
        setSelectedCategory(categoryName);
      }
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Фильтр по поисковому запросу
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Фильтр по категории
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Фильтр по цене
    if (priceRange.min !== '') {
      filtered = filtered.filter(product => product.price >= Number(priceRange.min));
    }
    if (priceRange.max !== '') {
      filtered = filtered.filter(product => product.price <= Number(priceRange.max));
    }

    switch (sortBy) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className={styles.container}>
      <CatalogSidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceChange={handlePriceChange}
      />

      <div className={styles.content}>
        <CatalogHeader
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          resultsCount={filteredProducts.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ProductGrid
          products={filteredProducts}
          cartItems={items}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
} 