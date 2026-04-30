// Telegram form submisson
let TOKEN = '8609804626:AAEgSpZFU5RyfaNJ4yUgv8qC1D6aoOrrWAo'
let CHAT_ID = '8720791832'


let form = document.querySelector('#contactForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let formData = new FormData(form)

  let text = `
📩 Yangi o‘quvchi!

👤 Ism: ${formData.get('name')}
📞 Telefon: ${formData.get('phone')}
🎂 Yosh: ${formData.get('age')}
  `

  sendToTelegram(text)
})

function sendToTelegram(text) {
  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    })
  })
    .then(res => res.json())
    .then(() => {
      alert('Xabaringiz yuborildi! ✅')
      form.reset()
    })
    .catch(err => {
      alert('Xatolik yuz berdi ❌')
      console.error(err)
    })
}