import React from 'react'
import './LanguagePanel.sass'
import { Nav } from 'react-bootstrap'
import moment from 'moment'
import Start from './Start'

type StartValue = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
type StartIndex = 1 | 2 | 3 | 4 | 5

type Skill = {
  name: string,
  value: StartValue
}

type SkillByLang = {
  [key: string] : Skill[]
}

const locale: SkillByLang = {
  es: [{
    name: 'Español',
    value: 5
  }, {
    name: 'Ingles',
    value: 2.5
  }],
  en: [{
    name: 'Spanish',
    value: 5
  }, {
    name: 'English',
    value: 2.5
  }]
}

const Component: React.FC = () => {
  const startIndex: StartIndex[] = [1, 2, 3, 4, 5]
  const lang = moment.locale()
  
  function items(lang: string): JSX.Element[] {
    const showLang: string = (
      lang === 'es' ?
        'es' :
        'en'
    )

    return locale[showLang].map(({name}, key) => (
      <span className="cv-text-cyan nav-link" key={key}>
        {name}
      </span>
    ))
  }

  function starts(lang: string): JSX.Element[] {
    // const showLang: string = (
    //   lang === 'es' ?
    //     'es' :
    //     'en'
    // )

    const showLang = 'en'

    return locale[showLang].map(({value}, key) => (
      <div key={key} className="cv-text-cyan">
        {startIndex.map((index, key) => <Start value={value} index={index} key={key}/>)}
      </div>
    ))
  }

  return (
    <>
      <h5 className="cv-aside-bar-offset cv-aside-bar-offset-2">Language</h5>
      <Nav className="flex-column cv-skill-names">
        {items(lang)}
      </Nav>

      <div className="cv-skill-starts">
        {starts(lang)}
      </div>
    </>
  )
}

export default Component
