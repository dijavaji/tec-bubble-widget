// social-button.js

document.addEventListener('DOMContentLoaded', function() {
  // Crear el contenedor principal
  const chatWidget = document.createElement('div');
  chatWidget.classList.add('chat-widget');
  chatWidget.id = 'chatWidget';

  // Crear el botón flotante
  const socialBtn = document.createElement('button');
  socialBtn.id = 'social-btn';
  socialBtn.classList.add('btn', 'btn-primary', 'shadow-lg', 'justify-content-center', 'align-items-center', 'social-btn');

  const chatWidgetButtonIcon = document.createElement('img');
  chatWidgetButtonIcon.src = 'https://raw.githubusercontent.com/Praxis-Innovacion/tec-bubble-embed/bffa0d745e7e6f70982cda04cf8b85700b3a43be/public/assets/img/icon_chatbot.svg';
  chatWidgetButtonIcon.alt = 'chat';
  chatWidgetButtonIcon.id = 'chatWidgetButtonIcon';
  chatWidgetButtonIcon.style.width = '51.82px';
  chatWidgetButtonIcon.style.height = '58px';

  socialBtn.appendChild(chatWidgetButtonIcon);

  // Agregar el botón flotante al contenedor principal
  chatWidget.appendChild(socialBtn);

  // Crear el contenedor del chat
  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');
  chatContainer.id = 'chatContainer';

  // Crear el header del chat
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');

  const chatHeaderIcon = document.createElement('img');
  chatHeaderIcon.src = 'https://raw.githubusercontent.com/Praxis-Innovacion/tec-bubble-embed/bffa0d745e7e6f70982cda04cf8b85700b3a43be/public/assets/img/icon_chatbot.svg';
  chatHeaderIcon.alt = 'chat';
  chatHeaderIcon.id = 'chatWidgetButtonIcon';
  chatHeaderIcon.style.width = '33.12px';
  chatHeaderIcon.style.height = '39px';

  const chatTitle = document.createElement('h1');
  chatTitle.style.background = 'linear-gradient(to right, #1AC5F3 0%, #5448DA 100%)';
  chatTitle.style.webkitBackgroundClip = 'text';
  chatTitle.style.webkitTextFillColor = 'transparent';
  chatTitle.style.fontSize = '12px';
  chatTitle.innerText = 'Asesor Virtual Inteligente';

  const chatClose = document.createElement('button');
  chatClose.classList.add('chat-close');
  chatClose.id = 'chatClose';
  chatClose.innerText = '×';

  // Añadir los elementos al header del chat
  chatHeader.appendChild(chatHeaderIcon);
  chatHeader.appendChild(chatTitle);
  chatHeader.appendChild(chatClose);

  // Crear el contenedor de los mensajes
  const chatMessages = document.createElement('div');
  chatMessages.classList.add('chat-messages');
  chatMessages.id = 'chatMessages';
  chatMessages.style.background = '#F2F2F2';

  // Crear el formulario de entrada de mensaje
  const chatForm = document.createElement('form');
  chatForm.classList.add('chat-input-form');
  chatForm.id = 'chatForm';

  const messageInputWrapper = document.createElement('div');
  messageInputWrapper.classList.add('input-wrapper');

  const messageInput = document.createElement('input');
  messageInput.type = 'text';
  messageInput.id = 'messageInput';
  messageInput.placeholder = 'Enviar mensaje';
  messageInput.autocomplete = 'off';

  const sendButton = document.createElement('button');
  sendButton.type = 'submit';

  const sendButtonIcon = document.createElement('img');
  sendButtonIcon.src = 'https://raw.githubusercontent.com/Praxis-Innovacion/tec-bubble-embed/bffa0d745e7e6f70982cda04cf8b85700b3a43be/public/assets/img/send10.svg';
  sendButtonIcon.alt = 'Ejecutar';
  sendButtonIcon.id = 'executeBtn';
  sendButtonIcon.onclick = ejecutarAccion; // Asegúrate de definir `ejecutarAccion()` en tu código

  sendButton.appendChild(sendButtonIcon);
  messageInputWrapper.appendChild(messageInput);
  messageInputWrapper.appendChild(sendButton);
  chatForm.appendChild(messageInputWrapper);

  // Añadir los elementos al contenedor del chat
  chatContainer.appendChild(chatHeader);
  chatContainer.appendChild(chatMessages);
  chatContainer.appendChild(chatForm);

  // Añadir el chatWidget (que contiene el botón flotante y el contenedor del chat) al body
  document.body.appendChild(chatWidget);
  document.body.appendChild(chatContainer);

  // Event listeners para abrir y cerrar el chat
  socialBtn.addEventListener('click', () => {
      chatContainer.classList.toggle('active');
  });

  chatClose.addEventListener('click', () => {
      chatContainer.classList.remove('active');
  });

  // Función de acción del botón "enviar"
  function ejecutarAccion() {
      // Lógica para el botón de enviar, como enviar el mensaje
      const messageText = messageInput.value.trim();

      if (messageText !== '') {
          // Crear el nuevo mensaje y añadirlo a la vista
          const newMessage = document.createElement('div');
          newMessage.classList.add('message', 'user');
          newMessage.innerText = messageText;

          chatMessages.appendChild(newMessage);
          chatMessages.scrollTop = chatMessages.scrollHeight; // Mantener el scroll hacia abajo

          // Limpiar el input
          messageInput.value = '';
      }
  }
});
