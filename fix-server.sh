#!/bin/bash

# Скрипт для автоматического исправления сервера через SSH
# Использование: ./fix-server.sh

REMOTE_USER="ubuntu"
REMOTE_HOST="85.202.192.89"
REMOTE_PASSWORD="SmMe@1994$"

echo "Подключение к серверу и исправление..."

# Используем sshpass для автоматической передачи пароля
# Если sshpass не установлен, установим его
if ! command -v sshpass &> /dev/null; then
    echo "Установка sshpass..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y sshpass
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install hudochenkov/sshpass/sshpass
    fi
fi

# Копируем скрипт очистки на сервер
echo "Копирование скрипта очистки на сервер..."
sshpass -p "$REMOTE_PASSWORD" scp -o StrictHostKeyChecking=no cleanup-server.sh $REMOTE_USER@$REMOTE_HOST:/tmp/

# Выполняем скрипт очистки на сервере
echo "Выполнение очистки на сервере..."
sshpass -p "$REMOTE_PASSWORD" ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST << 'ENDSSH'
    chmod +x /tmp/cleanup-server.sh
    sudo /tmp/cleanup-server.sh
    rm /tmp/cleanup-server.sh
ENDSSH

echo ""
echo "Исправление завершено!"
echo "Проверьте результаты выше."

