# Nullianism Website

Официальный сайт Нуллианства - первой в мире научной Open-Source религии.

## 📋 Требования

- Node.js 22+
- pnpm 10.11.1+

### Установка pnpm

Если у вас еще не установлен pnpm:

```bash
# Установка через npm
npm install -g pnpm

# Или через corepack (рекомендуется)
corepack enable
corepack prepare pnpm@latest --activate
```

## 🚀 Быстрый старт

### Запуск в режиме разработки

```bash
# Перейти в директорию проекта
cd path/to/nullianism.github.io

# Установить зависимости (если еще не установлены)
pnpm install

# Обновить контент из основного репозитория
pnpm run submodule-update
pnpm run sync-content

# Запустить сервер разработки
pnpm run dev
```

Сайт будет доступен по адресу: http://localhost:3000

### Сборка для продакшена

```bash
# Собрать статический сайт
pnpm run build

# Посмотреть собранный сайт локально
pnpx serve out
```

## 📁 Структура проекта

- `app/` - страницы и компоненты Next.js App Router
- `components/` - переиспользуемые React компоненты
- `content/` - синхронизированный контент из основного репозитория
- `content-source/` - git submodule с оригинальным контентом
- `lib/` - утилиты и константы
- `public/` - статические файлы
- `scripts/` - скрипты для синхронизации контента

## 🔧 Основные команды

- `pnpm run dev` - запуск сервера разработки
- `pnpm run build` - сборка для продакшена (включает синхронизацию контента)
- `pnpm run sync-content` - синхронизация контента из submodule
- `pnpm run submodule-update` - обновление submodule до последней версии

## 🌐 Деплой

Сайт автоматически деплоится на GitHub Pages при push в main ветку.

Live: https://nullianism.github.io
