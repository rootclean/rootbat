// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Небольшое приветствие в консоль (для разработчика)
    console.log('Сайт-био Макса Анфитова загружен ✓');

    // Эффект появления с небольшой задержкой (опционально)
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 50);
});
