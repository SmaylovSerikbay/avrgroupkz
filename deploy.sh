#!/bin/bash

# Переменные
REMOTE_USER="ubuntu"
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
  sudo mkdir -p $REMOTE_DIR
  cd $REMOTE_DIR

  # Устанавливаем правильные права
  sudo chown -R ubuntu:ubuntu .
  
  # Распаковываем архив
  tar -xzf deploy.tar.gz

  # Устанавливаем pnpm если его нет
  if ! command -v pnpm &> /dev/null; then
    curl -fsSL https://get.pnpm.io/install.sh | sudo bash -
    source /usr/local/bin/pnpm-env
  fi

  # Устанавливаем зависимости
  pnpm install

  # Собираем проект
  pnpm build

  # Устанавливаем PM2 если его нет
  if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
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