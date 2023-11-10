import React from 'react';
import Input from '../Input/Input';
import WhatsApp from '../assets/wpp.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Email from '../assets/email.svg';
import styles from './Contact.module.scss';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [msg, setMsg] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const fetchData = await fetch(
      'https://strongfitapi.vercel.app/contact/sendmail',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          assunto: subject,
          mensagem: msg,
        }),
      },
    );
    const { status } = await fetchData;
    const res = await fetchData.json();

    console.log(status);
  }

  return (
    <section>
      <div className={styles.contactBg}>
        <div>
          <h1 className="title">Fale Conosco</h1>
          <p>
            Tem alguma pergunta? Não hesite em entrar em contato conosco, e
            teremos o prazer de responder a sua consulta dentro de um prazo
            máximo de 24 horas.
          </p>
        </div>
      </div>
      <div className={`${styles.contactGrid} container`}>
        <div className={styles.contactInfo}>
          <h2>Contato</h2>
          <ul>
            <li>
              <img src={WhatsApp} alt="" />
              <a href="#">27 99999-9999</a>
            </li>
            <li>
              <img src={Instagram} alt="" />
              <a href="#">@strongfit</a>
            </li>
            <li>
              <img src={Facebook} alt="" />
              <a href="#">@strongfit</a>
            </li>
            <li>
              <img src={Email} alt="" />
              <a href="#">contato@strongfit.com</a>
            </li>
          </ul>
          <h2>Endereço</h2>
          <ul>
            <li>Rua Logo Ali, n°999</li>
            <li>Bairro Bem Ali</li>
            <li>Cariacica - ES</li>
            <li>Próximo à Mercearia 2 irmãos</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Envie sua mensagem</h2>
          <Input type="text" label="Nome" value={name} setValue={setName} />
          <Input type="email" label="Email" value={email} setValue={setEmail} />
          <Input
            type="text"
            label="Assunto"
            value={subject}
            setValue={setSubject}
          />
          <label>
            Mensagem
            <textarea
              cols="30"
              value={msg}
              onChange={({ target }) => setMsg(target.value)}
            ></textarea>
          </label>
          <button>enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
