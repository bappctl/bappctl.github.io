(function () {
    function loadWidget(options) {
      if (!window.React || !window.ReactDOM) {
        console.error("React and ReactDOM are required for this widget.");
        return;
      }
  
      const container = document.createElement("div");
      container.id = "chatbot-widget-container";
      document.body.appendChild(container);
  
      const ChatbotWidget = window.ChatbotWidget.default;
      if (!ChatbotWidget) {
        console.error("ChatbotWidget is not loaded.");
        return;
      }
  
      ReactDOM.render(
        React.createElement(ChatbotWidget, options),
        container
      );
    }
  
    window.initChatbotWidget = function (options) {
      const script = document.createElement("script");
      script.src = "https://bappctl.github.io/chatbot-widget.umd.js"; // Replace with actual CDN URL
      script.onload = () => loadWidget(options);
      document.head.appendChild(script);
    };
  })();
  