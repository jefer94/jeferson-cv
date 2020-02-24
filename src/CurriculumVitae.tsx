import React from 'react'
import './CurriculumVitae.sass'
import AsideBar from './AsideBar'
import ContentPanel from './ContentPanel'
import Projects, { Project } from './Projects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const javascript: Project[] = [{
  title: 'Algorithm',
  description: 'Algorithm is a integrated development environment',
  frameworks: ['React'],
  href: 'https://jefer94.github.io/algorithm'
}, {
  title: 'CV',
  description: 'Curriculum Vitae writing in Javascript',
  frameworks: ['React', 'Bootstrap'],
  href: 'https://jefer94.github.io'
}, {
  title: 'Todo Ionic React',
  description: 'Todo demo writing in React',
  frameworks: ['React', 'Ionic'],
  href: 'https://todo-ionic-demo.herokuapp.com/'
}, {
  title: 'Todo Ionic Angular',
  description: 'Todo demo writing in Angular',
  frameworks: ['Angular', 'Ionic'],
  href: 'https://todo-ionic-demo.herokuapp.com/'
}, {
  title: 'Todo Ionic Polymer',
  description: 'Todo demo writing in Polymer',
  frameworks: ['Polymer', 'Ionic'],
  href: 'https://todo-ionic-demo.herokuapp.com/'
}, {
  title: 'Todo Ionic Svelte',
  description: 'Todo demo writing in Svelte',
  frameworks: ['Svelte', 'Ionic'],
  href: 'https://todo-ionic-demo.herokuapp.com/'
}]

const python: Project[] = [{
  title: 'South Park Random',
  description: 'Get a spanish episode',
  frameworks: ['BeautifulSoup'],
  href: 'https://github.com/jefer94/south-park-random'
}] 

const nodejs: Project[] = [{
  title: 'To Do API',
  description: 'API rest of things to do',
  frameworks: ['Express.JS'],
  href: 'https://jefer94.github.io/algorithm'
}, {
  title: 'Scrapy',
  description: 'A mini scraping demo',
  frameworks: ['Puppeteer'],
  href: 'https://github.com/jefer94/scrapy'
}] 

const Component: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects/javascript">
          <Projects projects={javascript}/>
        </Route>
        <Route path="/projects/python">
          <Projects projects={python}/>
        </Route>
        <Route path="/projects/nodejs">
          <Projects projects={nodejs}/>
        </Route>
      </Switch>

      <AsideBar/>
      <ContentPanel/>
    </Router>
  )
}

export default Component
