import React from 'react';
import Input from '../Input/Input';
import WhatsApp from '../assets/wpp.svg';
import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Email from '../assets/email.svg';
import styles from './Contact.module.scss';
import Head from '../Head';
import FormError from '../Error/FormError';
import Confirmation from '../Confirmation/Confirmation';
import Loading from '../Loading/Loading';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [error, setError] = React.useState(null);
  const [sendForm, setSendForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function clearInput(dados) {
    if (dados.ok) {
      setName('');
      setEmail('');
      setSubject('');
      setMsg('');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setError(false);
      setLoading(true);
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
            subject,
            message: msg,
          }),
        },
      );
      const dados = await fetchData;
      const json = await dados.json();
      dados.ok ? setError(false) : setError(json.message);
      dados.ok ? setSendForm(json.message) : setSendForm(false);
      clearInput(dados);
      console.log(dados);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <Head
        title="Contato"
        description="Página de contato do website StrongFit"
      />
      {error && <FormError error={error} setValue={setError} />}
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
              <a href="#">
                <img src={WhatsApp} alt="" />
                <span>27 99999-9999</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="" />
                <span>@strongfit</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Facebook} alt="" />
                <span>@strongfit</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Email} alt="" />
                <span>contato@strongfit.com</span>
              </a>
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
        {sendForm ? (
          <Confirmation
            confirm={sendForm}
            btnTxt="Enviar outro email"
            setValue={setSendForm}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <h2>Envie sua mensagem</h2>
                <Input
                  type="text"
                  label="Nome"
                  value={name}
                  setValue={setName}
                />
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  setValue={setEmail}
                />
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
              </>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
