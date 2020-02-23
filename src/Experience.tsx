import React from 'react'
import './Experience.sass'
import { Card } from 'react-bootstrap'

type Position = 'Full-stack Developer' | 'Computer engineering' | 'Full-stack Developer and Founder' | 'Computer engineering Intern'

export type Experience = {
  title: string,
  description?: string,
  date: string,
  href: string,
  position?: Position
}

export type Props = {
  title: string,
  experiencies: Experience[]
}

const Component: React.FC<Props> = ({title, experiencies}) => {
  return (
    <div className="cv-experiences">
      <h1>{title}</h1>
      <div className="cv-experiences-box">
        {experiencies.map(({title, description, date, href, position}, key) => (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer">
            <Card bg="dark" text="white" style={{ width: '18rem' }} className="cv-experience-card">
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                {position ?
                  <Card.Title>{position}</Card.Title> :
                  <></>
                }
                <Card.Text>
                  {description} {date}
                </Card.Text>
              </Card.Body>
            </Card>
          </a> 
        ))}
      </div>
    </div>
  )
}

export default Component
