import React from 'react'
import './SkillPanel.sass'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Start from './Start'

type StartValue = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
type StartIndex = 1 | 2 | 3 | 4 | 5

type Skill = {
  name: string,
  value: StartValue
}

const skills: Skill[] = [{
  name: 'Javascript',
  value: 4.5
}, {
  name: 'Node.JS',
  value: 4.5
}, {
  name: 'Python',
  value: 2.5
}]

const Component: React.FC = () => {
  const startIndex: StartIndex[] = [1, 2, 3, 4, 5]


  return (
    <>
      <h5 className="cv-aside-bar-offset cv-aside-bar-offset-2">Skills</h5>
      <Nav className="flex-column cv-skill-names">
        {skills.map(({name}, key) => (
          <Link key={key} className="cv-text-cyan nav-link" to={`/projects/${name.toLowerCase().replace(/\./g, '')}`}>
            {name}
          </Link>
        ))}
      </Nav>

      <div className="cv-skill-starts">
        {skills.map(({value}, key) => (
          <div key={key} className="cv-text-cyan">
            {startIndex.map((index, key) => <Start value={value} index={index} key={key}/>)}
          </div>
        ))}
      </div>
    </>
  )
}

export default Component
