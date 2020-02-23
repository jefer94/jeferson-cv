import React from 'react'
import './AsideBar.sass'
import SkillPanel from './SkillPanel'
import HobbiesBar from './HobbiesBar'
import PersonalCard from './PersonalCard'
import LanguagePanel from './LanguagePanel'

const Component: React.FC = () => {
  return (
    <aside className="cv-aside-bar">
      <PersonalCard/>
      <SkillPanel/>
      <LanguagePanel/>
      <HobbiesBar/>
    </aside>
  )
}

export default Component
