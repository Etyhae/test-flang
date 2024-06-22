# Express.js Application

Это простое приложение на Express.js, которое обслуживает статические файлы и имеет несколько маршрутов.

## Установка

Сначала клонируйте репозиторий и перейдите в директорию проекта:

```bash
git clone https://github.com/etyhae/test-flang.git
cd your-repository
```

Установите зависимости с помощью npm:

```bash
npm install
```

Для запуска приложения используйте следующую команду

```bash
npm run dev
```

Приложение будет запущено на порту 5000 (или на порту, указанном в переменной окружения PORT).

# Маршруты

- GET /: Возвращает строку "Hello World!"
- GET /about: Возвращает строку "Это простое приложение на Express.js"
- GET /: Обслуживает статические файлы из директории public
- GET \*: Любой другой маршрут возвращает строку "404 error"

# Примеры ответа

1. GET /
   `Добро пожаловать в простое приложение Express!`
2. GET /about
   `Это простое приложение на Express.js`
3. GET /nonexistent
   `404 error`

# Docker

Для запуска приложения в Docker используйте следующие команды:
Сборка Docker образа

```bash
docker build -t your-image-name .
```

Запуск Docker контейнера

```bash
docker run -d -p 5000:5000 your-image-name
```
