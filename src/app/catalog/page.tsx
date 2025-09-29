'use client';

import React, { Suspense } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Tovari from './tovari';

function CatalogFallback() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center',
      background: '#f8fafc',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #1e40af',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }}></div>
      <div style={{
        fontSize: '1.2rem',
        color: '#64748b',
        fontWeight: '500'
      }}>Загрузка каталога сантехники...</div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<CatalogFallback />}>
          <Tovari />
        </Suspense>
      </main>
      <Footer />
    </>
  );
} 