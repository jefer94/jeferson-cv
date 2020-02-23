import React from 'react'
import './HobbiesBar.sass'
import { Nav } from 'react-bootstrap'
import moment from 'moment'

type Language = 'es' | 'en'

type hobby = {
  name: string,
  href: string
}

type Locale = {
  [key: string]: hobby[]
}

const locale: Locale = {
  en: [{
    name: 'Philosophy',
    href: 'https://en.wikipedia.org/wiki/Philosophy'
  }, {
    name: 'Anime',
    href: 'https://en.wikipedia.org/wiki/Anime'
  }, {
    name: 'Video game',
    href: 'https://en.wikipedia.org/wiki/Video_game'
  }],
  es: [{
    name: 'Filosofía',
    href: 'https://es.wikipedia.org/wiki/Filosof%C3%ADa'
  }, {
    name: 'Anime',
    href: 'https://es.wikipedia.org/wiki/Anime'
  }, {
    name: 'Videojuego',
    href: 'https://es.wikipedia.org/wiki/Videojuego'
  }]
}

const Component: React.FC = () => {
  const lang = moment.locale()

  function items(lang: string): JSX.Element[] {
    const showLang: string = (
      lang === 'es' ?
        'es' :
        'en'
    )

    return locale[showLang].map(({href, name}, key) => (
      <Nav.Link href={href} key={key} className="cv-text-cyan" target="_blank" rel="noopener noreferrer">{name}</Nav.Link>
      // <a  className="cv-link">
      //   <ListGroup.Item>{name}</ListGroup.Item>
      //   <Nav.Link>{skill}</Nav.Link>
      // </a>
    ))
  }
  
  return (
    <>
      <h5 className="cv-aside-bar-offset cv-aside-bar-offset-2">Hobbies</h5>
      <Nav defaultActiveKey="/home" className="flex-column">
        {items(lang)}
      </Nav>
      {/* <ListGroup className="list-group-horizontal">
        
      </ListGroup> */}
    </>
  )
}

export default Component
