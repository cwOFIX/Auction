<?php
// Параметры подключения к базе данных
$servername = "95.132.80.9";
$username = "remote_user";
$password = "26122003Fr!";
$dbname = "new_schema1";

try {
    // Создание подключения к базе данных
    $conn = new PDO("new_schema1:host=$servername;dbname=$dbname", $username, $password);
    
    // Установка режима обработки ошибок для выброса исключений
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Ваш PHP код для обработки данных, полученных со страницы

    // Пример сохранения данных из POST запроса в базу данных
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name']; // Имя и фамилия
        $email = $_POST['email']; // Email
        $password = $_POST['password']; // Пароль
        
        // SQL запрос для вставки данных в таблицу
        $sql = "INSERT INTO Users (name, email, password) VALUES ('$name', '$email', '$password')";
        
        // Исполнение SQL запроса
        $conn->exec($sql);
        
        echo "Данные успешно добавлены в базу данных.";
    }
} catch(PDOException $e) {
    // В случае ошибки выводим сообщение
    echo "Ошибка: " . $e->getMessage();
}

// После использования закройте соединение
$conn = null;
?>