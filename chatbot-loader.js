(function () {
    function loadWidget(options) {
      if (!window.React || !window.ReactDOM) {
        console.error("React and ReactDOM are required for this widget.");
        return;
      }
  
      // Wait for ChatbotWidget to load
      if (!window.ChatbotWidget) {
        console.error("ChatbotWidget is not loaded.");
        return;
      }
  
      const container = document.createElement("div");
      container.id = "chatbot-widget-container";
      document.body.appendChild(container);
  
      ReactDOM.render(
        React.createElement(window.ChatbotWidget.default, options),
        container
      );
    }
  
    window.initChatbotWidget = function (options) {
      const script = document.createElement("script");
      script.src = "https://bappctl.github.io/chatbot-widget.umd.js"; //Ensure this path is correct
      script.onload = () => {
        if (window.ChatbotWidget) {
          loadWidget(options);
        } else {
          console.error("ChatbotWidget failed to load.");
        }
      };
      document.head.appendChild(script);
    };
  })();
  