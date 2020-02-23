import React from 'react'
import './PersonalCard.sass'
import { Image } from 'react-bootstrap'
import photo from './perfil.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, IconDefinition, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

type SocialLink = {
  icon: IconDefinition,
  href: string,
  user: string
}

const socialLinks: SocialLink[] = [{
  icon: faGithub,
  href: 'https://github.com/jefer94',
  user: 'jefer94'
}, {
  icon: faLinkedin,
  href: 'https://www.linkedin.com/in/jefer94',
  user: 'jefer94'
}, {
  icon: faInstagram,
  href: 'https://instagram.com/jeferson.dev',
  user: 'jeferson.dev'
}, {
  icon: faFacebook,
  href: 'https://www.facebook.com/jeferson.dev',
  user: 'jeferson.dev'
}, {
  icon: faWhatsapp,
  href: 'https://wa.me/573215572629',
  user: 'jeferson.dev'
}]

const Component: React.FC = () => {
  return (
    <>
      <Image className="cv-photo" src={photo} fluid />
      
      <div className="text-center">
        {socialLinks.map(({icon, href}, key) => (
          <a href={href} key={key} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className={''} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Component