// tec-chat-widget.js - Refactored with Senior Frontend Best Practices
document.addEventListener('DOMContentLoaded', () => {
  const ASSISTANT_NAME = 'Asistente Technoloqie';
  const API_URL = 'http://127.0.0.1:8081/api/v1/messages';
  const ASSISTANT_ID = 'tec_cubepath_hackatonBot';
  const CREATED_BY = 'app-widget';

  const chatWidgetHTML = `
    <div class="chat-widget">
      <div class="chat-window" id="chatWindow">
        <div class="chat-header">
          <span>${ASSISTANT_NAME}</span>
          <span class="close-icon" onclick="toggleChat()">✕</span>
        </div>

        <ul class="message-container" id="message-container">
          <li class="message-left">
            <p class="message">
              Hola 👋 soy el asistente de Technoloqie. ¿En qué puedo ayudarte?
              <span>bot ● justo ahora</span>
            </p>
          </li>
        </ul>

        <div class="chat-input">
            <input type="text" id="chatInput" class="message-input" placeholder="Escribe un mensaje..." autocomplete="off">
            <button onclick="handleSendMessage()">➤</button>
        </div>
      </div>

      <div class="chat-button" onclick="toggleChat()">
        <img class="chat-img" src="https://raw.githubusercontent.com/dijavaji/tec-bubble-widget/c94d3d0807573c0c3bbb885c2bb97ebb4bf9c38e/public/assets/img/icon_message.svg" alt="mensaje widget" />
      </div>
    </div>

    <style>
      :root {
        --primary-color: #007bff;
        --bg-light: #f4f7f6;
        --white: #ffffff;
        --text-dark: #333333;
        --text-muted: #888888;
      }

      .chat-widget {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }

      .chat-window {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 350px;
        height: 500px;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000;
      }

      .chat-header {
        background: var(--primary-color);
        color: var(--white);
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
      }

      .close-icon {
        cursor: pointer;
        font-size: 18px;
      }

      .message-container {
        flex: 1;
        padding: 15px;
        margin: 0;
        list-style: none;
        overflow-y: auto;
        background: var(--bg-light);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .message-container li {
        max-width: 80%;
        margin-bottom: 5px;
      }

      .message-left {
        align-self: flex-start;
      }

      .message-right {
        align-self: flex-end;
      }

      .message {
        padding: 10px 15px;
        border-radius: 18px;
        position: relative;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
      }

      .message-left .message {
        background: #e9ecef;
        color: var(--text-dark);
        border-bottom-left-radius: 4px;
      }

      .message-right .message {
        background: var(--primary-color);
        color: var(--white);
        border-bottom-right-radius: 4px;
      }

      .message span {
        display: block;
        font-size: 10px;
        margin-top: 5px;
        opacity: 0.8;
      }

      .message-left span { color: var(--text-muted); }
      .message-right span { color: #d1ecff; text-align: right; }

      .message-feedback {
        align-self: flex-start;
        font-style: italic;
        color: var(--text-muted);
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .message-feedback img {
        width: 20px;
        height: 20px;
      }

      .chat-input-container {
        padding: 15px;
        border-top: 1px solid #eeeeee;
      }

      .message-form {
        display: flex;
        gap: 8px;
      }

      .message-input {
        flex: 1;
        border: 1px solid #ddd;
        padding: 8px 12px;
        border-radius: 20px;
        outline: none;
      }

      .send-button {
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s;
      }

      .send-button:hover {
        transform: scale(1.1);
      }

      .chat-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
      }

      .chat-img {
        width: 30px;
        height: 30px;
      }
    </style>
  `;

  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

  const chatWindow = document.getElementById('chatWindow');
  const messageContainer = document.getElementById('message-container');
  const chatInput = document.getElementById('chatInput');
  const messageForm = document.getElementById('message-form');

  // Utility: Get formatted time
  const getTime = () => {
    return new Intl.DateTimeFormat('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());
  };

  // State Management: Toggle visibility
  window.toggleChat = () => {
    const isVisible = chatWindow.style.display === 'flex';
    chatWindow.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) chatInput.focus();
  };

  // UI: Scroll to bottom
  const scrollToBottom = () => {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  };

  // UI: Show/Hide thinking indicator
  const setTyping = (isVisible) => {
    const existingFeedback = document.querySelector('.message-feedback');
    if (isVisible && !existingFeedback) {
      const feedbackElement = `
        <li class="message-feedback">
          <span>Technoloqie está pensando </span>
          <img src="https://cdn.jsdelivr.net/gh/dijavaji/tec-bubble-widget@develop/public/assets/img/load.svg" alt="Thinking...">
        </li>
      `;
      messageContainer.insertAdjacentHTML('beforeend', feedbackElement);
    } else if (!isVisible && existingFeedback) {
      existingFeedback.remove();
    }
    scrollToBottom();
  };

  // UI: Add message
  const addMessageToUI = (isOwnMessage, data) => {
    const element = `
      <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
        <p class="message">
          ${data.text}
          <span>${data.name} ● ${data.time}</span>
        </p>
      </li>
    `;
    messageContainer.insertAdjacentHTML('beforeend', element);
    scrollToBottom();
  };

  // Event: Send Message
  window.handleSendMessage = (e) => {
    if (e) e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    addMessageToUI(true, {
      text,
      name: 'Yo',
      time: getTime()
    });

    chatInput.value = '';
    const uuid = self.crypto.randomUUID();

    setTyping(true);

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        senderId: uuid,
        text: text,
        assistantName: ASSISTANT_ID,
        createdBy: CREATED_BY
      })
    })
      .then(response => response.json())
      .then(answer => {
        setTyping(false);
        addMessageToUI(false, {
          text: answer.data.text || 'Sin respuesta',
          name: 'Bot',
          time: getTime()
        });
      })
      .catch(error => {
        console.error('API Error:', error);
        setTyping(false);
        addMessageToUI(false, {
          text: 'Error de conexión. Intenta más tarde.',
          name: 'Sistema',
          time: getTime()
        });
      });
  };

});
