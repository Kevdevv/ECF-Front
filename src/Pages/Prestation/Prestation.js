import React from 'react'
import 'Pages/Prestation/Prestation.css'
import Moi from 'Pages/Prestation/Images/juste-moi.png'
import Deux from 'Pages/Prestation/Images/pour-deux.png'
import Famille from 'Pages/Prestation/Images/famille.png'
import Pregnant from 'Pages/Prestation/Images/une-fois.png'
import Bebe from 'Pages/Prestation/Images/bebe.png'
import Mariage from 'Pages/Prestation/Images/mariage.png'

const Prestation = () => {
  return (
    <div className='prestation'>
      <article>
        <p>
          “Juste moi” 130€<br/>
          Séance pour une personne, en exterieur ou en studio
        </p>
        <img className='prestation-image' src={Moi} alt='logo' />
      </article>
      <article>
        <p>
        “Pour deux” 195€<br/>
        Pour deux personnes, en exterieur ou en studio
        </p>
        <img className='prestation-image' src={Deux} alt='logo' />
      </article>
      <article>
        <p>
        “Famille” 220 euros<br/>
        Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
        </p>
        <img className='prestation-image' src={Famille} alt='logo' />
      </article>
      <article>
        <p>
        “Il était une fois” 160€<br/>
        Photo de grossesse (À votre domicile, en extérieur ou en studio)
        </p>
        <img className='prestation-image' src={Pregnant} alt='logo' />
      </article>
      <article>
        <p>
        “Mon bébé” 100 euros<br/>
        Photo d’enfant jusqu’à 3 ans (photo à domicile
        </p>
        <img className='prestation-image' src={Bebe} alt='logo' />
      </article>
      <article>
        <p>
        “J’immortalise l’événement”  sur mesure<br/>
        Prestation de mariage ou baptême sur devis
        </p>
        <img className='prestation-image' src={Mariage} alt='logo' />
      </article>
    </div>
  )
}

export default Prestation