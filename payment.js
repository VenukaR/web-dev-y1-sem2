var params = new URLSearchParams(window.location.search);
var total = params.get('total');23
document.getElementById('total').textContent = total;
console.log(total)

const form = document.querySelector('form');
const payButton = document.querySelector('#pay-now-button');

payButton.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const nic = document.querySelector('#nic').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;
  const cardname = document.querySelector('#cardname').value;
  const cardnumber = document.querySelector('#cardnumber').value;
  const expdate = document.querySelector('#expdate').value;
  const cvv = document.querySelector('#cvv').value;
//validation all
  if (name === '' || email === '' || phone === '' || nic ===''|| address === '' ||
   city === '' || country === '' || cardname === '' || cardnumber === '' ||
    expdate === '' || cvv === '') {
    alert('Please fill all the fields!');
  } else {
    alert('Payment successful!');
    const billingInfo={
      name,
      email,
      phone,
      address,
      city,
      country
    };
    // Convert the object to a JSON string
  const billingInfoJSON = JSON.stringify(billingInfo);
  // Add the JSON string to the local storage
  localStorage.setItem('billingInfo', billingInfoJSON);
    window.location.href = 'checkout.html';
  }
});
