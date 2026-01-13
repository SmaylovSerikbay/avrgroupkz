#!/bin/bash

# Скрипт для очистки сервера от вредоносного ПО
# ВНИМАНИЕ: Запускать с sudo!

echo "========================================="
echo "Очистка сервера от вредоносного ПО"
echo "========================================="

# 1. Создаем бэкап /etc/profile
echo "[1/7] Создание бэкапа /etc/profile..."
sudo cp /etc/profile /etc/profile.backup.$(date +%Y%m%d_%H%M%S)
echo "✓ Бэкап создан"

# 2. Проверяем и удаляем вредоносный код из /etc/profile
echo "[2/7] Проверка /etc/profile..."
if grep -q "/usr/bin/.update" /etc/profile; then
    echo "⚠ Найдена вредоносная строка в /etc/profile"
    # Удаляем строки с .update
    sudo sed -i '/\/usr\/bin\/\.update/d' /etc/profile
    echo "✓ Вредоносный код удален из /etc/profile"
else
    echo "✓ Вредоносный код не найден в /etc/profile"
fi

# 3. Удаляем вредоносный файл
echo "[3/7] Удаление вредоносного файла /usr/bin/.update..."
if [ -f /usr/bin/.update ]; then
    sudo rm -f /usr/bin/.update
    echo "✓ Файл /usr/bin/.update удален"
else
    echo "✓ Файл /usr/bin/.update не найден"
fi

# 4. Проверяем другие точки автозапуска
echo "[4/7] Проверка других точек автозапуска..."

# Проверяем crontab
if crontab -l 2>/dev/null | grep -q ".update"; then
    echo "⚠ Найдено в crontab пользователя"
    crontab -l | grep -v ".update" | crontab -
    echo "✓ Очищено из crontab пользователя"
fi

if sudo crontab -l 2>/dev/null | grep -q ".update"; then
    echo "⚠ Найдено в root crontab"
    sudo crontab -l | grep -v ".update" | sudo crontab -
    echo "✓ Очищено из root crontab"
fi

# Проверяем .bashrc и .bash_profile
for file in ~/.bashrc ~/.bash_profile /root/.bashrc /root/.bash_profile; do
    if [ -f "$file" ] && grep -q ".update" "$file" 2>/dev/null; then
        echo "⚠ Найдено в $file"
        sudo sed -i '/\/usr\/bin\/\.update/d' "$file"
        echo "✓ Очищено из $file"
    fi
done

# 5. Проверяем systemd сервисы
echo "[5/7] Проверка systemd сервисов..."
if systemctl list-units --type=service 2>/dev/null | grep -qi "update"; then
    echo "⚠ Найдены подозрительные сервисы"
    systemctl list-units --type=service | grep -i "update"
else
    echo "✓ Подозрительные сервисы не найдены"
fi

# 6. Убиваем все процессы .update
echo "[6/7] Завершение процессов .update..."
sudo pkill -9 -f "/usr/bin/.update" 2>/dev/null
sudo pkill -9 -f "\.update" 2>/dev/null
echo "✓ Процессы завершены"

# 7. Проверяем сетевые соединения
echo "[7/7] Проверка сетевых соединений..."
echo "Активные соединения:"
netstat -tulpn 2>/dev/null | grep -v "127.0.0.1" | head -10

echo ""
echo "========================================="
echo "Очистка завершена!"
echo "========================================="
echo ""
echo "Рекомендуется:"
echo "1. Перезагрузить сервер: sudo reboot"
echo "2. Сменить все пароли"
echo "3. Проверить SSH ключи: cat ~/.ssh/authorized_keys"
echo "4. Обновить систему: sudo apt update && sudo apt upgrade"
echo "5. Проверить логи: sudo journalctl -xe | grep -i update"

