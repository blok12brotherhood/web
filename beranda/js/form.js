// Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDRghUq1VmWAR6I_OorSRFF7CnGVsG6pg5RX_uZaR9OjbZRaxgN5sIRHub5k6-3wtIhQ/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => Swal.fire({
    title: 'TERIMA KASIH!',
    text: 'Pesan anda telah terkirim ke Kita, dan Kita akan Mengavaluasinya!',
    icon: 'success',
    confirmButtonText: 'Oke'
  }))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})