import React from 'react'
import './Home.css'
import LatestMovies from '../../components/LastMovies/LatestMovies'
import Footer from '../../components/Footer/Footer'
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import { validateForm } from '../../utils/validations'

const Home = () => {
  const [ativo, setAtivo] = React.useState(false);

  const toggleModal = () => {
    setAtivo(!ativo);
  }

  return (
    <>
      <main>
        <div className='hero'>
          <span className='bg-movie-name'> <a href="">Se Beber Não Case 3 (2013)</a></span>
          <h1>
            Avalie filmes que já assistiu. <br></br>
            Salve os que você quer ver. <br></br>
            Mostre para os seus amigos.<br></br>
          </h1>

          {ativo && <div className="modal">
            <div className='modal-header'>
              <h2>Entre no cineboxd</h2>
              <button onClick={toggleModal}>X</button>
            </div>
            <form action="">
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
              </div>

              <div>
                <label htmlFor="username">Usuário</label>
                <input type="text" id='username' />
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id='senha' />
              </div>

              <button id='btn-form' onClick={(e) => { e.preventDefault(); validateForm() }}>Inscrever-se</button>
            </form>
          </div>
          }

          <button className='btn' onClick={toggleModal}>Se cadastre — É de graça!</button>

          <p>A rede social dos amantes do cinema.</p>
        </div>
      </main >
      <section className='container-latest-movies'>
        <LatestMovies />
      </section>
      <FeaturesSection />
      <Footer />
    </>
  )
}

export default Home