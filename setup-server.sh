#!/bin/bash

# Обновляем систему
apt update && apt upgrade -y

# Устанавливаем необходимые пакеты
apt install -y curl git nginx

# Устанавливаем Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Устанавливаем PM2 глобально
npm install -g pm2

# Создаем директорию для приложения
mkdir -p /var/www/avrgroup
chown -R www-data:www-data /var/www/avrgroup

# Копируем конфигурацию Nginx
cp nginx.conf /etc/nginx/sites-available/avrgroup
ln -s /etc/nginx/sites-available/avrgroup /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

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

echo "Настройка сервера завершена!"
echo "Теперь вы можете запустить deploy.sh для деплоя приложения"
echo "После деплоя выполните: certbot --nginx -d avrgroup.kz -d www.avrgroup.kz" 