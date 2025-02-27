#!/bin/bash

# Проверяем, что скрипт запущен с sudo
if [ "$EUID" -ne 0 ]; then 
  echo "Пожалуйста, запустите скрипт с sudo"
  exit
fi

# Обновляем систему
apt update && apt upgrade -y

# Устанавливаем необходимые пакеты
apt install -y curl git nginx

# Устанавливаем Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Устанавливаем pnpm
curl -fsSL https://get.pnpm.io/install.sh | bash -
source /usr/local/bin/pnpm-env

# Устанавливаем PM2 глобально
npm install -g pm2

# Создаем директорию для приложения
mkdir -p /var/www/avrgroup
chown -R ubuntu:ubuntu /var/www/avrgroup
chmod -R 755 /var/www/avrgroup

# Копируем конфигурацию Nginx
cp nginx.conf /etc/nginx/sites-available/avrgroup
ln -s /etc/nginx/sites-available/avrgroup /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Устанавливаем правильные права для Nginx
chown -R www-data:www-data /etc/nginx/sites-available/avrgroup
chown -R www-data:www-data /etc/nginx/sites-enabled/avrgroup
chmod 644 /etc/nginx/sites-available/avrgroup
chmod 644 /etc/nginx/sites-enabled/avrgroup

# Проверяем конфигурацию Nginx
nginx -t

# Перезапускаем Nginx
systemctl restart nginx

# Устанавливаем certbot для SSL
apt install -y certbot python3-certbot-nginx

# Настраиваем firewall
apt install -y ufw
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Добавляем пользователя ubuntu в нужные группы
usermod -aG www-data ubuntu

echo "Настройка сервера завершена!"
echo "Теперь вы можете запустить deploy.sh для деплоя приложения"
echo "После деплоя выполните: sudo certbot --nginx -d avrgroup.kz -d www.avrgroup.kz" 