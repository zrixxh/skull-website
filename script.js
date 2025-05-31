function sendMessage() {
  const message = document.getElementById('message').value.trim();
  if (!message) {
    alert('Please enter a message.');
    return;
  }

  fetch("https://discord.com/api/webhooks/1378306303067422780/Inphf5n2aZ2y2r6ZAwY4QWcVfpCudlT2zQz5E6wUJ2ogwyIJvjlPANc4dSmc2dyln1OB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `💡 New website request: ${message}`
    })
  }).then(res => {
    if (res.ok) {
      alert('Message sent!');
      document.getElementById('message').value = '';
    } else {
      alert('Failed to send message.');
    }
  });
}

