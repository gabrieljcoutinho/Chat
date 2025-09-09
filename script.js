const GEMINI_API_KEY = 'SUA API'; // acesar:  https://aistudio.google.com/apikey
const messagesDiv = document.getElementById('messages');
const inputMessage = document.getElementById('inputMessage');

function addMessage(text, role, isMarkdown=false) {
  const div = document.createElement('div');
  div.className = 'message ' + role;

  if(isMarkdown) {
    const html = marked.parse(text); // converte Markdown para HTML
    div.innerHTML = DOMPurify.sanitize(html); // limpa HTML inseguro
  } else {
    div.textContent = text;
  }

  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendMessage(e) {
  if(e) e.preventDefault();
  const text = inputMessage.value.trim();
  if(!text) return;

  addMessage(text,'user');
  inputMessage.value = '';

  try{
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        contents:[{role:'user',parts:[{text}]}],
        generationConfig:{temperature:0.9, topP:0.8, maxOutputTokens:500}
      })
    });

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts[0]?.text || 'Não consegui gerar resposta';

    addMessage(reply,'bot', true); // agora com Markdown convertido
  } catch(err){
    addMessage('Erro: '+err.message,'bot');
  }
}

document.getElementById('inputForm').addEventListener('submit', sendMessage);