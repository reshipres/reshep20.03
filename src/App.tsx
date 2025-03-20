import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';

// Lazy-loaded pages
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const RecoverPage = lazy(() => import('./pages/RecoverPage'));
const PhoneRecoveryPage = lazy(() => import('./pages/PhoneRecoveryPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const DeliveryPaymentPage = lazy(() => import('./pages/DeliveryPaymentPage'));
const SetupFinderPage = lazy(() => import('./pages/SetupFinderPage'));
const MouseFinderPage = lazy(() => import('./pages/MouseFinderPage'));
const MouseStatsPage = lazy(() => import('./pages/MouseStatsPage'));
const MouseComparisonPage = lazy(() => import('./pages/MouseComparisonPage'));
const GiftCardPage = lazy(() => import('./pages/GiftCardPage'));
const GiftCardActivationPage = lazy(() => import('./pages/GiftCardActivationPage'));
const SalePage = lazy(() => import('./pages/SalePage'));
const BrandsPage = lazy(() => import('./pages/BrandsPage'));
const BrandDetailPage = lazy(() => import('./pages/BrandDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const PlayersPage = lazy(() => import('./pages/PlayersPage'));
const PlayerSetupPage = lazy(() => import('./pages/PlayerSetupPage'));

// Test Pages
const TestProductCardPage = lazy(() => import('./pages/TestProductCardPage'));
const TestCategoryPage = lazy(() => import('./pages/TestCategoryPage'));

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Основные страницы */}
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:category" element={<CatalogPage />} />
            <Route path="catalog/:category/:subcategory" element={<CatalogPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout/success" element={<CheckoutSuccessPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:postSlug" element={<BlogPostPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="recover/:token" element={<RecoverPage />} />
            <Route path="phone-recovery" element={<PhoneRecoveryPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="delivery-payment" element={<DeliveryPaymentPage />} />
            <Route path="setup-finder" element={<SetupFinderPage />} />
            <Route path="mouse-finder" element={<MouseFinderPage />} />
            <Route path="mouse-stats" element={<MouseStatsPage />} />
            <Route path="mouse-comparison" element={<MouseComparisonPage />} />
            <Route path="gift-card" element={<GiftCardPage />} />
            <Route path="gift-card-activation" element={<GiftCardActivationPage />} />
            <Route path="sale" element={<SalePage />} />
            <Route path="brands" element={<BrandsPage />} />
            <Route path="brands/:brandSlug" element={<BrandDetailPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="players/:playerSlug" element={<PlayerSetupPage />} />

            {/* Тестовые страницы */}
            <Route path="test/product-card" element={<TestProductCardPage />} />
            <Route path="test/category" element={<TestCategoryPage />} />

            {/* Ошибка 404 */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <p className="text-xl text-gray-600">Страница не найдена</p>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
