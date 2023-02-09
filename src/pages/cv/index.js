/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import CV from 'react-cv';
import styles from './styles.module.css';
import { faStamp } from '@fortawesome/free-solid-svg-icons'

const CVData = {
  personalData: {
    name: 'Tien Xuan Vo',
    title: 'Senior PHP Developer',
    image: '/img/cv/profile.jpg',
    contacts: [
      { type: 'email', value: 'tien [dot] xuan [dot] vo [at] gmail.com' },
      { type: 'phone', value: '+84 (xxx) xxx xx xx' },
      { type: 'website', value: 'tienvx.github.io' },
      { type: 'linkedin', value: 'linkedin.com/in/tienxuanvo' },
      { type: 'twitter', value: 'twitter.com/tienvoxuan' },
      { type: 'github', value: 'github.com/tienvx' }
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: "I'm Symfony 5 certified developer with 3 years experience. I has been working with PHP language for 10 years. I love learning new things by working on open-source projects.",
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Information Technology (Bachelor of Science)',
          authority: 'Ho Chi Minh City University of Science',
          authorityWebSite: 'https://www.hcmus.edu.vn/',
          rightSide: 'Sep. 2008 - Dec. 2012'
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Certificates',
      description: '',
      icon: faStamp,
      items: [
        {
          title: 'Symfony 5 Certification',
          authority: 'Fabien Potencier, Symfony CEO',
          authorityWebSite: 'https://connect.symfony.com/profile/tienvx',
          rightSide: 'Dec. 2021'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      //description: 'Optional',
      icon: 'archive',
      items: [
        {
          title: 'Senior PHP Developer',
          company: 'Sunbytes',
          description: 'We worked with micro-services using API Platform (an API-first framework based on Symfony)',
          companyWebSite: 'https://sunbytes.io/',
          companyMeta: 'Software outsourcing company',
          datesBetween: 'Jan. 2020 - Jan. 2023',
          descriptionTags: ['Symfony', 'API Platform', 'Kafka', 'PHPUnit', 'Codeception']
        },
        {
          title: 'Senior PHP Developer',
          company: 'GO1',
          description: 'At first we worked on Drupal projects, but then we updated them to micro-services using Silex',
          companyWebSite: 'https://www.go1.com/',
          companyMeta: 'E-learning platform',
          datesBetween: 'Apr. 2013 - July 2019',
          descriptionTags: ['Drupal', 'Silex', 'Symfony Components', 'AngularJS', 'RabbitMQ', 'ReactJS', 'ElasticSearch', 'PHPUnit', 'Protractor', 'Testcafe', 'Codeception']
        },
        {
          title: 'Software Tester Intern',
          company: 'Global Cybersoft',
          description: 'I was introduced to basic concepts of software testing.',
          companyWebSite: 'http://www.globalcybersoft.com/en/',
          companyMeta: 'Search IT Software Solution & Consulting Company',
          datesBetween: 'July 2012 - Aug. 2012'
        },
        {
          title: 'Web Developer Intern',
          company: 'VIETMAI Solutions',
          description: 'I wrote PHP scripts to scrap online information.',
          companyWebSite: 'https://www.vietmaisolutions.com/',
          companyMeta: 'Software development and technology solutions consulting.',
          datesBetween: 'Sept. 2011 - Dec. 2012',
          descriptionTags: ['PHP']
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'Sunbytes',
          description: '',
          items: [
            { title: 'Kwadraad', projectUrl: 'https://www.kwadraad.nl/', description: 'A tool for social worker. We updated it from monolith to microservices using API Platform.' },
          ]
        },
        {
          sectionHeader: 'GO1',
          description: '',
          items: [
            { title: 'Report Builder', projectUrl: 'https://help.go1.com/en/articles/1691825-introduction-to-reporting', description: 'A reporting system that present information to users in different ways. It was buit using PHP, Elasticsearch, AngularJS.' },
            { title: 'Monolith', projectUrl: 'https://github.com/tony-th/go1-monolith', description: 'A tool to help developer debug and test frontend and backend code in one place.' },
          ]
        },
        {
          sectionHeader: 'Personal',
          description: '',
          items: [
            { title: 'Pact PHP (Contributor)', projectUrl: 'https://github.com/pact-foundation/pact-php', description: 'PHP version of Pact (A consumer driven contract testing tool).' },
            { title: 'SICOPE Model (Author)', projectUrl: 'https://sicope-model.github.io', description: 'An open-source software testing tool for web application.' },
          ]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'Vietnamese',
          authorityMeta: 'Native'
        },
        {
          authority: 'English',
          authorityMeta: 'Intermediate'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['Symfony 5', 'API Platform', 'PHPUnit', 'Codeception', 'PHP', 'Composer', 'XDebug', 'Docker', 'Docker Compose', 'Git', 'Github', 'Gitlab', 'Mysql', 'Elasticsearch', 'Kafka', 'AngularJS']
    },
    {
      type: 'tag-list',
      title: 'Hobies & Interests',
      icon: 'cubes',
      items: ['Gaming', 'Open Source']
    }
  ],
  branding: false
};

class MyCV extends Component {
  componentDidMount(){
    document.title = 'Tien Vo\'s Online Resume';
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <CV {...CVData} />
      </div>
    )
  }
}

export default MyCV;
