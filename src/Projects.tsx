import React from 'react'
import './Projects.sass'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

type Framework = 'React' | 'Express.JS' | 'Selenium' | 'Ionic' | 'Bootstrap' | 'Svelte' | 'Angular' | 'Polymer' | 'BeautifulSoup' | 'Puppeteer'

export type Project = {
  title: string,
  description: string,
  frameworks: Framework[],
  href: string
}

type Props = {
  projects: Project[]
}

const ProjectCard: React.FC<Project> = ({title, description, frameworks, href}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {frameworks.length ?
          <Card.Text>
            <strong>Frameworks:</strong> {frameworks.reduce<string>((acc, current) => acc ? `${acc}, ${current}` : current, '')}
          </Card.Text> :
          <></>
        }

        <div className="text-right">
          <Card.Link href={href} target="_blank">Website</Card.Link>
        </div>
      </Card.Footer>
    </Card>
  )
}

const Component: React.FC<Props> = ({children, projects}) => {
  return (
    <div className="cv-projects">
      <Link to="/">
        <div className="cv-back-button text-center">
          <FontAwesomeIcon icon={faChevronLeft} className={''} />
        </div>
      </Link>
      {/* <h1 className="cv-skill-title">Javascript</h1> */}

      <div className="cv-projects-list">
        {projects.map(({title, description, frameworks, href}, key) => (
          <ProjectCard title={title} description={description} frameworks={frameworks} href={href} key={key}/>
        ))}
      </div>
    </div>
  )
}

export default Component
