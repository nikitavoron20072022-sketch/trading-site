function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = "<p>Привет, тут о трейдинге</p>";
    document.body.style.backgroundColor = "#d3d3d3"; // Серый фон
  } else if (page === "nikita") {
    content.innerHTML = "<p>Привет, я Никита</p>";
    document.body.style.backgroundColor = "#f4f4f4"; // Светлый фон
  } else if (page === "tools") {
    content.innerHTML = `
      <h2>Инструменты трейдинга</h2>
      <div class="tool-box" onclick="window.open('https://www.tradingview.com', '_blank')">
        Перейти в TradingView
      </div>
      <div class="tool-box" onclick="window.open('https://digash.live/#/app/charts-screener', '_blank')">
        Скринер Digash
      </div>
    `;
    document.body.style.backgroundColor = "#f4f4f4";
  }
}
