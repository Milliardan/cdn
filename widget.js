// Создаем стили виджета и добавляем их в документ
const style = document.createElement("style");
style.textContent = `
    #widget-container {
        text-align: center;
        margin-top: 20px;
    }
    #widget-text {
        font-size: 20px;
        font-weight: bold;
        transition: color 0.3s;
    }
`;
document.head.appendChild(style);

// Создаем HTML-элементы для виджета
const widgetContainer = document.createElement("div");
widgetContainer.id = "widget-container";

const widgetText = document.createElement("p");
widgetText.id = "widget-text";
widgetText.textContent = "Привет, ты меня видишь!";
widgetContainer.appendChild(widgetText);

document.body.appendChild(widgetContainer);

// Добавляем логику для изменения цвета текста при наведении
widgetText.addEventListener("mouseover", function () {
    widgetText.style.color = "red";
});
widgetText.addEventListener("mouseout", function () {
    widgetText.style.color = "";
});
