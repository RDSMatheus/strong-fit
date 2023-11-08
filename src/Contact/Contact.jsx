import React from 'react';
import Input from '../Input/Input';
import ContactImg from '../assets/contact.jpg';
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
    const res = await fetchData;
    const json = await res.json();

    console.log(json);
  }

  return (
    <section className={styles.contactGrid}>
      <div>
        <h1 className="title">Fale Conosco</h1>
        <p>
          Tem alguma pergunta? Não hesite em entrar em contato conosco, e
          teremos o prazer de responder a sua consulta dentro de um prazo máximo
          de 24 horas.
        </p>
      </div>
      <img src={ContactImg} alt="Homem malhando" />
      <form onSubmit={handleSubmit}>
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
    </section>
  );
};

export default Contact;
