// Updated tec-chat-widget.js to include API connection

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
          <div id="loadingIndicator" class="hidden" style="justify-content: center; align-items: center; padding: 10px;">
          <img src="https://cdn.jsdelivr.net/gh/dijavaji/tec-bubble-widget@develop/public/assets/img/load.svg" alt="Cargando..." />
        </div>

        </div>

        <style>
          .hidden { display: none; }
          .visible { display: flex; }
        </style>

        <div class="chat-input">
          <input id="chatInput" placeholder="Escribe un mensaje...">
          <button onclick="sendMessage()">➤</button>
        </div>
      </div>

      <div class="chat-button" onclick="toggleChat()">
        <img class="chat-img" src="https://raw.githubusercontent.com/dijavaji/tec-bubble-widget/c94d3d0807573c0c3bbb885c2bb97ebb4bf9c38e/public/assets/img/icon_message.svg" alt="mensaje widget" />
      </div>
    </div>
  `;

  // Add the widget HTML to the page
  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

  // Get references to elements
  const chatWindow = document.getElementById('chatWindow');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const loadingIndicator = document.getElementById('loadingIndicator');
  
  const API_URL = 'http://127.0.0.1:8081/api/v1/messages';
  const ASSISTANT = 'tec_cubepath_hackatonBot';
  const CREATED_BY = 'app-widget';

  // Toggle chat window visibility
  window.toggleChat = () => {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    if (chatWindow.style.display === 'flex') {
      chatInput.focus();
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
    let uuid = self.crypto.randomUUID();
    // Connect to the API for bot responses
    loadingIndicator.classList.remove('hidden'); // Show loading indicator
    loadingIndicator.classList.add('visible');
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderId: uuid,
        text: message,
        assistantName: ASSISTANT,
        createdBy: CREATED_BY
      })
    })
      .then(response => response.json())
      .then(answer => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('msg', 'bot');
        console.log(answer);
        botMessage.textContent = answer.data.text || 'El bot no tiene respuesta en este momento';
        chatMessages.appendChild(botMessage);
        loadingIndicator.classList.remove('visible'); // Hide loading indicator
        loadingIndicator.classList.add('hidden');

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
      })
      .catch(error => {
        console.error('Error connecting to the API:', error);
        const botMessage = document.createElement('div');
        botMessage.classList.add('msg', 'bot');
        botMessage.textContent = 'Error al conectar con el bot, intenta nuevamente más tarde.';
        chatMessages.appendChild(botMessage);
        loadingIndicator.classList.remove('visible'); // Hide loading indicator
        loadingIndicator.classList.add('hidden');

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
      });
  };
});
