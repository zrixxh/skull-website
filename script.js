function sendMessage() {
  const message = document.getElementById('message').value.trim();
  if (!message) {
    alert('Please enter a message.');
    return;
  }

  fetch("https://discord.com/api/webhooks/1378306773165015040/HCi0h2Sx6PgAnLO2T2O7m5IxNe6fWGmHWjoQ2qs0ZXfip5FhQab2SBMbdhJPef8ha6xi", {
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
