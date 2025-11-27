import React from 'react'
import './Home.css'
import LatestMovies from '../../components/LastMovies/LatestMovies'
import Footer from '../../components/Footer/Footer'
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import Modal from '../../components/Modal/Modal'

const Home = () => {
  const [ativo, setAtivo] = React.useState(false);

  const toggleModal = () => setAtivo(prev => !prev);


  return (
    <>
      <main className={ativo ? 'opacity' : ''}>
        <div className='hero'>
          <span className='bg-movie-name'> <a href="">Se Beber Não Case 3 (2013)</a></span>
          <h1>
            Avalie filmes que já assistiu. <br></br>
            Salve os que você quer ver. <br></br>
            Mostre para os seus amigos.<br></br>
          </h1>

          {ativo && <Modal ativo={ativo} onClose={toggleModal} />}

          <button className='btn' onClick={toggleModal}>Se cadastre — É de graça!</button>

          <p>A rede social dos amantes do cinema.</p>
        </div>
      </main >
      <section className='container-latest-movies'>
        <LatestMovies />
      </section>
      <FeaturesSection />

    </>
  )
}

export default Home