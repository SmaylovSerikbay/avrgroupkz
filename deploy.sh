#!/bin/bash

# Переменные
REMOTE_USER="root"
REMOTE_HOST="85.202.192.89"
REMOTE_DIR="/var/www/avrgroup"
APP_NAME="avrgroup"

# Архивируем проект
echo "Архивирование проекта..."
tar --exclude='node_modules' --exclude='.next' --exclude='.git' -czf deploy.tar.gz .

# Копируем архив на сервер
echo "Копирование файлов на сервер..."
scp deploy.tar.gz $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/

# Выполняем команды на сервере
echo "Установка и запуск на сервере..."
ssh $REMOTE_USER@$REMOTE_HOST << EOF
  # Создаем директорию если её нет
  mkdir -p $REMOTE_DIR
  cd $REMOTE_DIR

  # Распаковываем архив
  tar -xzf deploy.tar.gz

  # Устанавливаем зависимости
  npm install

  # Собираем проект
  npm run build

  # Устанавливаем PM2 если его нет
  if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
  fi

  # Перезапускаем приложение
  pm2 delete $APP_NAME 2>/dev/null || true
  pm2 start ecosystem.config.js

  # Сохраняем конфигурацию PM2
  pm2 save

  # Удаляем архив
  rm deploy.tar.gz
EOF

# Удаляем локальный архив
rm deploy.tar.gz

echo "Деплой завершен!" 