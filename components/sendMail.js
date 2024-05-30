
export const sendMail = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': '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'
    },
    body: JSON.stringify({
      sender: {name: 'Mary from MyShop', email: 'no-reply@myshop.com', id: 2},
      to: [{email: 'janine.zielman@icloud.com', name: 'Jimmy'}],
      htmlContent: '<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>',
      textContent: 'Please confirm your email address by clicking on the link https://text.domain.com',
      subject: 'Login Email confirmation',
      replyTo: {email: 'ann6533@example.com', name: 'Ann'},
    })
  };
  
  fetch('https://api.brevo.com/v3/smtp/email', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

};