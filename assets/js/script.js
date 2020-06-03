function sendEmail(id, subject) {
  let name = document.querySelector(id + " [name=name]").value
  let email = document.querySelector(id + " [name=email]").value
  let message = document.querySelector(id + " [name=message]").value
  let phone = ""
  try {phone = document.querySelector(id + " [name=phone]").value
  }catch{}

  console.log(
    name,email,message,phone, subject
  )

  let text = ""

  switch (subject) {
    case 'Contato':      
      text = /*html*/`
        <h1>${subject}</h1>
        <h2>Dados de contato</h2>
        <dl>
          <dt>Nome: </dt><dd>${name}</dd>
          <dt>Email: </dt><dd>${email}</dd>
        </dl>
        <p>
          ${message}  
        </p>
      `
      break;

    case 'Voluntário':      
      text = /*html*/`
        <h1>${subject}</h1>
        <h2>Dados de contato</h2>
        <dl>
          <dt>Nome: </dt><dd>${name}</dd>
          <dt>Email: </dt><dd>${email}</dd>
          <dt>Telefone: </dt><dd>${phone}</dd>
        </dl>
        <p>Como posso ajudar?</p>
        <p>
          ${message}  
        </p>
      `

    case 'Doação':      
      text = /*html*/`
      <h1>${subject}</h1>
      <h2>Dados de contato</h2>
      <dl>
        <dt>Nome: </dt><dd>${name}</dd>
        <dt>Email: </dt><dd>${email}</dd>
        <dt>Telefone: </dt><dd>${phone}</dd>
      </dl>
      <p>O que posso doar?</p>
      <p>
        ${message}  
      </p>
      `
      break;


    default:
      break;
  }

  Email.send({
  Host: "smtp.gmail.com",
  Username : 'ong.cajef@gmail.com',
  Password : 'cajef2020',
  To : 'ong.cajef@gmail.com',
  From : email,
  Subject : subject,
  Body : text,
  }).then(
    message => window.location.reload()
  );
}