import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Input from '../Input/Input';
import styles from './Register.module.scss';
import Logo from '../assets/logo.svg';
import FormError from '../Error/FormError';
import Error404 from '../Error/Error404';
import Head from '../Head';
import Confirmation from '../Confirmation/Confirmation';
import { NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Register = () => {
  const { id } = useParams();
  const [plan, setPlan] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [confirmationError, setConfirmationError] = React.useState(null);
  const [detailMobile, setDetailMobile] = React.useState(false);
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [sendForm, setSendForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getPlanById(id) {
      try {
        setLoading(true);
        setError(null);
        const dados = await fetch(
          `https://strongfitapi.vercel.app/plan/getplanbyid/${id}`,
        );
        const json = await dados.json();
        dados.ok ? setPlan(json.plan) : setError(true);
        setPlan(json.plan);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getPlanById(id);
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('enviando...');
    console.log(plan._id);
    try {
      const dados = await fetch(`https://strongfitapi.vercel.app/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          cpf,
          email,
          phone,
          plan: plan._id,
        }),
      });
      const json = await dados.json();
      dados.ok
        ? setConfirmationError(false)
        : setConfirmationError(json.message);
      dados.ok ? setSendForm(json.message) : setSendForm(false);
      console.log(confirmationError);
    } catch (err) {
      console.log(err);
    }
  }

  if (error) return <Error404 />;

  console.log(loading);

  if (plan)
    return (
      <section>
        <Head
          title="Registro"
          description="Página de registros do website StrongFit"
        />
        {confirmationError && (
          <FormError
            error={confirmationError}
            setValue={setConfirmationError}
          />
        )}
        <div className={`${styles.registerTopBar}`}>
          <div className="container">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
        </div>
        <div className={`${styles.registerWrapper} container`}>
          <h1 className="title">conclua sua matricula</h1>
          {sendForm ? (
            <Confirmation
              confirm={sendForm}
              btnTxt="Fazer outro cadastro"
              setValue={setSendForm}
            />
          ) : (
            <form onSubmit={handleSubmit}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <div className={styles.form}>
                    <Input label="Nome completo" setValue={setName} />
                    <Input label="CPF" setValue={setCpf} />
                    <Input label="Email" setValue={setEmail} />
                    <Input label="Telefone" setValue={setPhone} />
                    <button className={styles.btnDesktop}>cadastrar</button>
                  </div>
                  <div className={styles.sideBarMobile}>
                    <div>
                      <h3>{plan.planName}</h3>
                      <p onClick={() => setDetailMobile(!detailMobile)}>
                        Detalhes da matricula
                      </p>
                    </div>
                    <button className={styles.btnMobile}>cadastrar</button>
                  </div>
                </>
              )}
            </form>
          )}
          <div className={styles.sideBar}>
            <ul>
              <h2>{plan.planName}</h2>
              <li>
                <p>1° mensalidade</p>{' '}
                <span>{plan.planPromo ? plan.planPromo : plan.planPrice}</span>
              </li>
              <li>
                <p>Demais mensalidades</p>
                <span>{plan.planPrice}</span>
              </li>
            </ul>
          </div>
        </div>
        {detailMobile && (
          <div className={styles.mobileDetails}>
            <ul>
              <h2>{plan.planName}</h2>
              <li>
                <p>1° mensalidade</p>{' '}
                <span>{plan.planPromo ? plan.planPromo : plan.planPrice}</span>
              </li>
              <li>
                <p>Demais mensalidades</p>
                <span>{plan.planPrice}</span>
              </li>
            </ul>
          </div>
        )}
      </section>
    );
  else return null;
};

export default Register;
