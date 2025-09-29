# Конфигурация базы данных и логирования

## Управление логированием

Добавьте в ваш `.env.local` файл следующие переменные для управления логированием:

```env
# Включить/выключить логирование базы данных
DB_LOGGING=true                 # true/false (по умолчанию: true в development)

# Уровень логирования
DB_LOG_LEVEL=info              # silent, error, warn, info, debug

# Показывать конфигурацию подключения при запуске
DB_SHOW_CONFIG=true            # true/false

# Тестировать подключение при инициализации
DB_TEST_CONNECTION=true        # true/false (по умолчанию: true)

# Настройки SSL для PostgreSQL
POSTGRES_SSL=false            # true/false (по умолчанию: false)
DB_SSL=false                  # альтернативная переменная для отключения SSL
```

## Уровни логирования

- **`silent`** - Отключить все логи
- **`error`** - Только ошибки (❌)
- **`warn`** - Ошибки + предупреждения (⚠️)
- **`info`** - Ошибки + предупреждения + информация (ℹ️)
- **`debug`** - Все логи включая отладочную информацию (🔍)

## Примеры конфигурации

### Для production (минимум логов)
```env
DB_LOGGING=true
DB_LOG_LEVEL=error
DB_SHOW_CONFIG=false
DB_TEST_CONNECTION=false
```

### Для development (полные логи)
```env
DB_LOGGING=true
DB_LOG_LEVEL=debug
DB_SHOW_CONFIG=true
DB_TEST_CONNECTION=true
```

### Отключить все логи
```env
DB_LOGGING=false
```

## Структура модулей

```
src/lib/
├── config/
│   └── database.ts     # Конфигурация и логгер
├── db/
│   ├── connection.ts   # Пул соединений
│   ├── queries.ts      # Выполнение запросов
│   ├── testing.ts      # Тестирование подключения
│   └── index.ts        # Экспорт всех функций
├── database/
│   ├── users.ts        # CRUD пользователей
│   ├── orders.ts       # CRUD заказов
│   ├── favorites.ts    # CRUD избранного
│   ├── cart.ts         # CRUD корзины
│   └── index.ts        # Экспорт всех функций
├── types/
│   └── database.ts     # TypeScript типы
├── db.ts              # Обратная совместимость
└── database.ts        # Обратная совместимость
```

## Обратная совместимость

Все существующие импорты продолжают работать:

```typescript
// Эти импорты работают без изменений
import { query, transaction } from '@/lib/db';
import { findUserByEmail } from '@/lib/database';
```
