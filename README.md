# ReShip - Интернет-магазин компьютерной периферии

ReShip - это современный интернет-магазин компьютерной периферии, разработанный на React с использованием TypeScript. Проект предлагает удобный интерфейс для покупки игровой периферии и аксессуаров с богатой функциональностью и привлекательным дизайном.

## 🚀 Особенности проекта

- **Адаптивный дизайн** - оптимизирован для всех устройств от мобильных до десктопных
- **Интерактивный пользовательский интерфейс** с анимациями (Framer Motion)
- **Полный каталог продуктов** с продвинутой системой фильтрации
- **Динамические слайдеры и баннеры** для промо-акций
- **Система рекомендаций товаров** на основе предпочтений пользователя
- **Интеграция с разделом стримеров** - рекомендации от популярных киберспортсменов
- **Инструменты для подбора комплектующих** - помощь в выборе оптимальной периферии
- **Блог с полезным контентом** - обзоры, гайды, новости и советы
- **Личный кабинет с расширенным функционалом** - история заказов, избранное, профиль

## 🛠️ Технологии

- **Frontend**: React 18, TypeScript
- **Стилизация**: TailwindCSS, CSS Modules
- **Управление состоянием**: Redux Toolkit
- **Маршрутизация**: React Router v6
- **Анимации**: Framer Motion
- **UI компоненты**: Headless UI, Hero Icons
- **Сборка**: Create React App

## 📦 Структура проекта

```
src/
├── api/              # API интеграции и запросы
├── assets/           # Статические ресурсы (изображения, шрифты)
├── components/       # Переиспользуемые компоненты
│   ├── BlogSection/  # Секция блога на главной странице
│   ├── BrandSlider/  # Слайдер с брендами
│   ├── Hero/         # Главный баннер
│   ├── StreamerSection/ # Секция со стримерами
│   ├── product/      # Компоненты связанные с продуктами
│   └── ...
├── data/             # Данные и константы (включая blogPosts.ts)
├── features/         # Модули функциональности
├── hooks/            # Пользовательские React хуки
├── layouts/          # Макеты страниц
├── pages/            # Страницы приложения
│   ├── BlogPage.tsx    # Страница со всеми статьями блога
│   ├── BlogPostPage.tsx # Страница отдельной статьи
│   ├── ...
├── store/            # Redux store и slice файлы
├── styles/           # Глобальные стили
├── types/            # TypeScript типы и интерфейсы
├── utils/            # Вспомогательные функции
└── App.tsx           # Корневой компонент
```

## 🧩 Архитектура блога

Блог в проекте ReShip представлен тремя ключевыми компонентами, каждый из которых выполняет свою специфическую роль:

1. **BlogSection.tsx** - компонент для главной страницы, показывающий карусель из последних статей блога с возможностью переключения между ними. Оптимизирован для привлечения внимания и краткого ознакомления.

2. **BlogPage.tsx** - полноценная страница блога со списком всех статей, поиском, фильтрацией по категориям и выделенной главной статьей (featured post). Предоставляет пользователю полный обзор контента блога.

3. **BlogPostPage.tsx** - страница отдельной статьи с полным содержимым, информацией об авторе, датой публикации и возможностями шеринга. Включает дополнительный интерактивный контент в зависимости от темы статьи (например, секция с формат-факторами для статей о клавиатурах).

Данная трехкомпонентная структура обеспечивает оптимальный пользовательский опыт:
- Привлечение внимания на главной странице (BlogSection)
- Навигация и поиск в каталоге статей (BlogPage)
- Удобное чтение полных материалов (BlogPostPage)

## 📱 Основные компоненты

### Hero
Главный баннер на странице с автоматическим переключением слайдов и адаптивным дизайном. Включает текст, кнопки и индикаторы слайдов. Оптимизирован для конверсии.

### BrandSlider
Карусель с логотипами популярных брендов, поддерживает адаптивную верстку и тач-свайпы для мобильных устройств.

### StreamerSection
Секция с рекомендациями от популярных стримеров. Включает информацию о стримере, его фото и список рекомендуемых товаров.

### ToolPromoSection
Интерактивный блок с видеофоном, представляющий инструмент для подбора оборудования. Ведет на страницу SetupFinderPage.

### CategoryMenu
Визуальная навигация по категориям товаров с иконками и оптимизированной для пользователя структурой.

### ProductCard
Карточка товара с динамическими элементами: рейтингом, ценой, скидками, кнопками добавления в корзину и избранное.

## 🏗️ Архитектура проекта и взаимодействие с бэкендом

### Концепция архитектуры

ReShip построен по принципу клиент-серверной архитектуры с четким разделением на фронтенд и бэкенд части. Такой подход обеспечивает масштабируемость, гибкость и возможность независимого развития каждой части системы.

### Бэкенд инфраструктура

**Технологический стек бэкенда:**
- **Node.js с Express.js** - для API-серверной части
- **PostgreSQL** - основная база данных для хранения информации о продуктах, заказах, пользователях
- **Redis** - для кэширования данных и управления сессиями
- **MongoDB** - для хранения неструктурированных данных (отзывы, комментарии)
- **Firebase Authentication** - для управления пользовательскими аккаунтами

### Структура API

API построено по принципам REST с четким разделением ресурсов:

1. **Продукты**:
   - `GET /api/products` - получение списка продуктов с фильтрацией
   - `GET /api/products/:id` - получение детальной информации о продукте
   - `GET /api/products/recommendations` - получение рекомендуемых товаров

2. **Пользователи**:
   - `POST /api/auth/register` - регистрация
   - `POST /api/auth/login` - авторизация
   - `GET /api/users/me` - информация о текущем пользователе
   - `PUT /api/users/me` - обновление профиля

3. **Корзина и заказы**:
   - `GET /api/cart` - получение текущей корзины
   - `POST /api/cart/items` - добавление товара в корзину
   - `DELETE /api/cart/items/:id` - удаление товара из корзины
   - `POST /api/orders` - создание заказа
   - `GET /api/orders` - история заказов

4. **Блог**:
   - `GET /api/blog/posts` - получение списка статей
   - `GET /api/blog/posts/:slug` - получение полной статьи
   - `GET /api/blog/categories` - список категорий

5. **Инструменты подбора**:
   - `POST /api/tools/setup-finder` - подбор комплектующих
   - `GET /api/tools/comparison` - данные для сравнения продуктов

### Взаимодействие фронтенда с бэкендом

1. **Слой API-клиентов:**
   
   В проекте реализован модульный подход к работе с API через специальный слой API-клиентов в директории `src/api/`. Для каждого ресурса создан отдельный клиент:
   
   ```typescript
   // src/api/productsApi.ts
   import { apiClient } from './apiClient';
   import { Product, ProductFilter } from '../types/product';

   export const productsApi = {
     getProducts: (filters: ProductFilter) => apiClient.get<Product[]>('/products', { params: filters }),
     getProductById: (id: string) => apiClient.get<Product>(`/products/${id}`),
     // ...
   };
   ```

2. **Обработка состояний запросов:**
   
   Для обработки асинхронных запросов и состояний используется Redux Toolkit с RTK Query:
   
   ```typescript
   // src/store/products/productsApi.ts
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
   import { Product, ProductFilter } from '../../types/product';

   export const productsApi = createApi({
     reducerPath: 'productsApi',
     baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
     endpoints: (builder) => ({
       getProducts: builder.query<Product[], ProductFilter>({
         query: (filter) => ({
           url: '/products',
           params: filter,
         }),
       }),
       // ...
     }),
   });

   export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
   ```

3. **Обработка ошибок и повторные запросы:**
   
   Реализована централизованная обработка ошибок на уровне API-клиента с автоматическими повторными запросами при необходимости:
   
   ```typescript
   // src/api/apiClient.ts
   import axios from 'axios';
   import { refreshToken } from './authApi';

   const apiClient = axios.create({
     baseURL: process.env.REACT_APP_API_URL,
     timeout: 10000,
   });

   apiClient.interceptors.response.use(
     (response) => response,
     async (error) => {
       const originalRequest = error.config;
       if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;
         await refreshToken();
         return apiClient(originalRequest);
       }
       return Promise.reject(error);
     }
   );
   ```

### Аутентификация и безопасность

1. **JWT-токены:**
   - Аутентификация основана на JWT-токенах
   - Access token с коротким сроком жизни для доступа к API
   - Refresh token для обновления access token
   - Хранение токенов в secure HTTP-only cookies

2. **Безопасность API:**
   - Защита от CSRF-атак
   - Использование HTTPS
   - Rate limiting для защиты от DDoS-атак
   - Валидация данных на стороне клиента и сервера

### Кэширование и производительность

1. **Мультиуровневое кэширование:**
   - Кэширование на уровне сервера с Redis
   - Кэширование запросов на клиенте с RTK Query
   - Кэширование статичных ресурсов через CDN

2. **Оптимизация загрузки данных:**
   - Постраничная загрузка (pagination)
   - Бесконечная прокрутка (infinite scroll)
   - Ленивая загрузка изображений и компонентов
   - Server-side rendering для SEO-страниц

### Архитектура микросервисов

В перспективе развития проекта планируется переход к микросервисной архитектуре:

1. **Микросервисы:**
   - Сервис каталога товаров
   - Сервис управления пользователями
   - Сервис заказов и платежей
   - Сервис блога и контента
   - Сервис рекомендаций и аналитики

2. **Межсервисное взаимодействие:**
   - Асинхронное взаимодействие через сообщения (RabbitMQ/Kafka)
   - Синхронное взаимодействие через REST API или gRPC
   - API Gateway для маршрутизации запросов