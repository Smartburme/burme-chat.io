// chat.js - Chat logic for friends-chat.html & room-chat.html

(() => {
  const chatContainer = document.querySelector('.chat-scroll');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');

  // Debounce function to avoid spamming send
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    }
  }

  // Append chat bubble
  function appendChat(message, sender='user') {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender);
    bubble.textContent = message;
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Fake bot response (replace with real API call)
  async function getBotResponse(userMsg) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`မင်္ဂလာပါ! သင်ပြောလိုသည်မှာ "${userMsg}" ဖြစ်ပါသည်။`);
      }, 1000);
    });
  }

  // Handle send message
  const handleSend = debounce(async () => {
    const msg = chatInput.value.trim();
    if (!msg) return;

    appendChat(msg, 'user');
    chatInput.value = '';

    const botReply = await getBotResponse(msg);
    appendChat(botReply, 'bot');
  }, 300);

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
  }
})();
