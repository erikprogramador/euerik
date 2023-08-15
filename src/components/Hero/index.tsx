import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <img
            src="/logo-white.svg"
            alt="Erik V. Fernandes logo"
            className={styles.logo}
          />

          <h1>
            Olá!
            <br />
            Meu nome é Erik!
          </h1>
          <p>
            Sou um <strong>empresário</strong> por natureza,{' '}
            <strong>desenvolvedor</strong> por paixão, <strong>designer</strong>{' '}
            por curioziadade e <strong>engenheiro mecânico em formação.</strong>
          </p>
          <p>
            Sim, gosto de aprender e exercitar muitas das coisas que eu aprendo.
            E olha, eu gosto de aprender bastante 😁!
          </p>
          <p>
            Faço isso para poder atender com qualidade os meus clientes na{' '}
            <a href="https://adalov.com" target="_blank">
              Adalov
            </a>
            , onde atuo como diretor de operações, trazendo o meu conhecimento
            para resolver problemas reais e criar novas soluções facilitando a
            vida dos nossos clientes.
          </p>

          <p className={styles.smallP}>
            * Esse site é bem temporário. Estou fazendo algo mais completo e
            logo coloco no ar. Enquanto isso você pode ver mais sobre mim no meu
            linkedin. É só{' '}
            <a
              href="https://www.linkedin.com/in/erik-vanderlei-fernandes/"
              target="_blank"
            >
              clicar aqui
            </a>
            !
          </p>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src="/erik.png" alt="Erik Vanderlei Fernandes" />
      </div>
    </section>
  );
}
