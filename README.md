# Photo Library App

![Logo](/public/Intro.png)

# Описание
Данный проект является приложением для поиска и загрузки фотографий с [pixabay.com](https://pixabay.com/).

# Запуск

## Для работы в режиме разработки
1. Нужно установить [Node.js](https://nodejs.org/en/download/)
2. Скопировать репозиторий [тут](https://github.com/Freyzan2006/photo-library-frontend)
3. Перейти в папку с репозиторием
4. Установить зависимости
```
npm install || yarn install || pnpm install || bun install
```
5. Взять [API KEY](https://pixabay.com/api/)
6. Скопировать в файл .env:
```env
NEXT_PUBLIC_API_PIXABAY_KEY=<YOUR_API_KEY>
```
7. Запустить приложение:
```
npm run dev || yarn dev || pnpm dev || bun run dev
```
8. Открыть в браузере [http://localhost:3000](http://localhost:3000)