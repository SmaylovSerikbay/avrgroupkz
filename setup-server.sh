#!/bin/bash

# Обновляем систему
sudo apt update && sudo apt upgrade -y

# Устанавливаем необходимые пакеты
sudo apt install -y curl git nginx

# Устанавливаем Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install -y nodejs

# Устанавливаем PM2 глобально
sudo npm install -g pm2

# Создаем директорию для приложения
sudo mkdir -p /var/www/avrgroup
sudo chown -R www-data:www-data /var/www/avrgroup

# Копируем конфигурацию Nginx
sudo cp nginx.conf /etc/nginx/sites-available/avrgroup
sudo ln -s /etc/nginx/sites-available/avrgroup /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Проверяем конфигурацию Nginx
sudo nginx -t

# Перезапускаем Nginx
sudo systemctl restart nginx

# Устанавливаем certbot для SSL
sudo apt install -y certbot python3-certbot-nginx

# Настраиваем firewall
sudo apt install -y ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "Настройка сервера завершена!"
echo "Теперь вы можете запустить deploy.sh для деплоя приложения"
echo "После деплоя выполните: sudo certbot --nginx -d avrgroup.kz -d www.avrgroup.kz" 