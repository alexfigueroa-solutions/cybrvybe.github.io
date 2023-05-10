import React from 'react';
import ProfileSkillsContainer from '../ProfileSkills/profile-skills-container';
import ProfileTechContainer from '../ProfileTech/profile-tech-container';
import ProfileIntroContainer from '../ProfileIntro/profile-intro-container';
import dict from '../../data/profile_data';
import ProjectRoadmap from '../ProjectRoadmap/project-roadmap';
import './profile-layout.scss';
import ProfileRoadmapContainer from '../ProfileRoadmap/profile-roadmap-container';
export default class ProfileLayout extends React.Component {
  render() {
    return (
      <div className="profileLayoutWrapperWrapper">
        <div className="profileLayoutWrapper">
          <ProfileIntroContainer></ProfileIntroContainer>
          <ProfileTechContainer
            tech_list={dict['tech_list']}
          ></ProfileTechContainer>
          <ProfileSkillsContainer></ProfileSkillsContainer>
          <ProfileRoadmapContainer></ProfileRoadmapContainer>
        </div>
      </div>
    );
  }
}
