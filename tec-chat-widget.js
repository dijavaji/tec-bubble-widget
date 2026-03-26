// Refactored social-button.js

document.addEventListener('DOMContentLoaded', () => {
  const chatWidgetHTML = `
    <div class="chat-widget">

      <div class="chat-window" id="chatWindow">

        <div class="chat-header">
          <span>Asistente Virtual Inteligente</span>
          <span style="cursor:pointer" onclick="toggleChat()">✕</span>
        </div>

        <div class="chat-messages" id="chatMessages">
          <div class="msg bot">Hola 👋 soy el asistente de Technoloqie. ¿En qué puedo ayudarte?</div>
        </div>

        <div class="chat-input">
          <input id="chatInput" placeholder="Escribe un mensaje...">
          <button onclick="sendMessage()">➤</button>
        </div>

      </div>

      <div class="chat-button" onclick="toggleChat()">
        <img class="chat-img" src="/public/assets/img/icon_message.svg" alt="mensaje widget" />
      </div>

    </div>
  `;

  // Add the widget HTML to the page
  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

  // Get references to elements
  const chatWindow = document.getElementById('chatWindow');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');

  // Toggle chat window visibility
  window.toggleChat = () => {
    if (chatWindow.style.display === 'flex') {
      chatWindow.style.display = 'none';
    } else {
      chatWindow.style.display = 'flex';
      chatInput.focus(); // Focus input when opened
    }
  };

  // Send a message
  window.sendMessage = () => {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    const userMessage = document.createElement('div');
    userMessage.classList.add('msg', 'user');
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Clear input field
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('msg', 'bot');
      botMessage.textContent = `Respuesta de bot: "${message}"`;
      chatMessages.appendChild(botMessage);

      // Scroll to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  };
});
