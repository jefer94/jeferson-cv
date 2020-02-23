import React from 'react'
import './ContentPanel.sass'
import { Switch, Route } from 'react-router-dom'
import Experiences, { Experience } from './Experience'

const professionalExperiences: Experience[] = [{
  title: 'SmartIT',
  description: 'I made web applications in React and Angular, and some services in the Net Core web API, some simple scripts in Python, scrappers with Selenium, Puppeteer and BeatifulSoup.',
  date: '2018 - 2020',
  href: 'https://www.smartitcompany.es/',
  position: 'Full-stack Developer'
}, {
  title: 'King of App',
  description: 'I made modules, in AngularJS and Polymer, for a builder of mobile applications, its are shown in a online store and each module is like a piece of a app.',
  date: '2017 - 2018',
  href: 'https://kingofapp.com/',
  position: 'Full-stack Developer'
}, {
  title: 'Rómulo Gallegos Experimental National College',
  description: 'Algorithm was my thesis, it is a emulator of an IDE of algorithms, it can run an algorithm and show the results in a console',
  date: '2016 - 2017',
  href: 'https://jefer94.github.io/algorithm/#/',
  position: 'Computer engineering'
}, {
  title: 'Chocoland Framework',
  description: 'Chocoland in a principle was a Single Page Application Full-stack framework, currently discontinued by React.',
  date: '2016 - 2017',
  href: 'https://github.com/chocoland/',
  position: 'Full-stack Developer and Founder'
}, {
  title: 'Foundation University Clinical Center FUNDACLIU',
  description: 'In this internship was developed to medical history system.',
  date: '2015 - 2016',
  href: 'https://twitter.com/fundacliusjm?lang=es',
  position: 'Computer engineering Intern'
}]

const academicTraining: Experience[] = [{
  title: 'King of App',
  description: `I do modules, in AngularJS and Polymer, for a builder of mobile applications, its are shown in a online store and each module is like a piece of a app, like menus, themes and pages. Also I did a Plugin for Wordpress, a OAuth server for Shopify, and some services to it'd connect to thats APIs, like Shopify, Wordpress and Prestashop`,
  date: '2017 - Present',
  href: 'aaa'
}]

const Component: React.FC = () => {
  return (
    <Switch>
      <Route path="/about">
        2
      </Route>
      <Route path="/users">
        1
      </Route>
      <Route path="/">
        <div className="cv-content-panel">
          <h1 className="text-center">Jeferson José De Freitas Pinto</h1>
          <div>
            {/* <h2>Resume</h2> */}
            <p>
              I am an Engineer Informatics, Back-end Development and React Development, I likes an API good, the clean code, the good programming practices, write algorithms, and fix bugs.
            </p>
            <Experiences title="Experience" experiencies={professionalExperiences}/>
            <Experiences title="Academic training" experiencies={academicTraining}/>
          </div>
        </div>
      </Route>
    </Switch>
  )
}

export default Component
