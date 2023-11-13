import React from 'react';
import styles from './Plan.module.scss';
import { Link } from 'react-router-dom';

const Plan = () => {
  const [plans, setPlans] = React.useState(null);

  React.useEffect(() => {
    async function getPlans() {
      const dados = await fetch('https://strongfitapi.vercel.app/plan/getplan');
      const json = await dados.json();
      setPlans(json.plans);
    }
    getPlans();
  }, []);

  function defineClass(plan) {
    if (plans) {
      if (plan.toLowerCase() === 'plano strong') return styles.planStrong;
      if (plan.toLowerCase() === 'plano fit') return styles.planFit;
      if (plan.toLowerCase() === 'plano premium') return styles.planPremium;
    }
  }

  if (plans)
    return (
      <section className={styles.planBg} id="plan">
        <div className="container">
          <h1 className="title">Escolha seu Plano</h1>
          <div className={styles.planWrapper}>
            {plans &&
              plans.map((plan) => {
                return (
                  <div className={defineClass(plan.planName)} key={plan._id}>
                    <h2>{plan.planName}</h2>
                    {plan.planPromo && <span>a partir de</span>}
                    <p>{plan.planPrice}</p>
                    <ul>
                      {plan.planBenefits.map((benefits) => (
                        <li key={benefits}>{benefits}</li>
                      ))}
                    </ul>
                    <Link to={`register/${plan._id}`}>inscreva-se</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  else return null;
};

export default Plan;
