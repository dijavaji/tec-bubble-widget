# bubble-widget

## Introduction

The Bubble Widget is a lightweight, embeddable chat widget designed for the Smart Chatbot system, seamlessly integrating with any website or Content Management System (CMS) in minutes. It provides powerful conversational AI capabilities to deliver a superior customer service experience.

This widget acts as a frontend component for the Smart Chatbot system developed by Technoloqie, addressing critical requirements such as responsive real-time messaging, user-friendly interactions, and seamless handoffs to human agents when necessary.

---

## Features

- **Quick Integration**: Easily integrate the widget into any website with minimal setup.
- **Real-Time Messaging**: Interactive and friendly user interface for chat conversations.
- **AI-Powered Responses**: Backend integration with NLP models for intelligent, context-aware responses.
- **Seamless Handoffs**: Transfers complex queries to human agents without disrupting the user experience.
- **Customizable Design**: Adapt the widget's look and feel to match your brand.

---

## Installation

To include the widget on your website, follow these steps:

### Using Script Tag

1. Include the JavaScript file in your HTML:
   ```html
    <!-- Cargar el archivo JS personalizado desde el CDN technoloqie-->
    <script src="https://cdn.jsdelivr.net/gh/dijavaji/tec-bubble-widget@develop/tec-chat-widget.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dijavaji/tec-bubble-widget@develop/tec-chat-widget.css">
   ```

2. Add the following placeholder where the widget should appear:
   ```html
    <!-- technoloqie Chatbot Widget -->
    <div id="chat-widget-container"></div>
   ```

### Via NPM (Coming Soon)

1. Install the package:
   ```sh
   npm install @technoloqie/bubble-widget
   ```

2. Import the component:
   ```javascript
   import ChatWidget from '@technoloqie/bubble-widget';

   ChatWidget.initialize({
     containerId: 'chat-widget-container',
   });
   ```

---

## Usage

Once integrated, the widget will automatically render and connect to the Smart Chatbot system. Some configuration options include:

- **Customizations**: Modify the widget's appearance and behavior via CSS or JavaScript parameters.
- **APIs for Third-Party Integration**:
   - Extend functionality with CRM systems.
   - Auto-log customer interaction data.

---

## Development

### Requirements

- Node.js (v14+ recommended)
- NPM or Yarn

### Running Locally

1. Clone this repository:
   ```sh
   git clone https://github.com/example/bubble-widget.git
   ```

2. Navigate to the project directory:
   ```sh
   cd bubble-widget
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

---

## Contributing

1. Fork this repository and create a new branch.
2. Make your changes and commit them with clear messages.
3. Submit a Pull Request for review.

---

## License

Licensed under the Apache 2.0 License. See `LICENSE` for more information.
