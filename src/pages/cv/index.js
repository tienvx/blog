/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import CV from 'react-cv';
import styles from './styles.module.css';

const CVData = {
  personalData: {
    name: 'Tien Xuan Vo',
    title: 'Senior PHP Developer',
    image: 'img/cv/profile.jpg',
    contacts: [
      { type: 'email', value: 'tien . xuan . vo at gmail.com' },
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
      content: "I'm Symfony 5 certified developer with 3 years experience. I has been working with PHP language for over 10 years. I love learning new things by working on open-source projects.",
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
          rightSide: 'Sep 2008 - Dec 2012'
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
          description: 'I worked with micro-services using API Platform (an API-first framework based on Symfony)',
          companyWebSite: 'https://sunbytes.io/',
          companyMeta: 'Software outsource company',
          datesBetween: '2020.01 - 2023.01',
          descriptionTags: ['Symfony', 'API Platform', 'Kafka', 'PHPUnit', 'Codeception']
        },
        {
          title: 'Senior PHP Developer',
          company: 'GO1',
          description: 'I was a Drupal developer. Then I worked with Silex based micro-services, and AngularJS',
          companyWebSite: 'https://www.go1.com/',
          companyMeta: 'E-learning portal',
          datesBetween: '2013.04 - 2019.07',
          descriptionTags: ['Drupal', 'Silex', 'Symfony Components', 'AngularJS', 'RabbitMQ', 'ReactJS', 'ElasticSearch', 'PHPUnit', 'Protractor', 'Testcafe', 'Codeception']
        },
        {
          title: 'Software Tester Intern',
          company: 'Global Cybersoft',
          description: 'I was introduced to basic concepts of software testing.',
          companyWebSite: 'http://www.globalcybersoft.com/en/',
          companyMeta: 'Search IT Software Solution & Consulting Company | Global CyberSoft',
          datesBetween: '2012.07 - 2012.08'
        },
        {
          title: 'Web Developer Intern',
          company: 'VietMaiSolutions',
          description: 'I wrote PHP scripts to scrap online information.',
          companyWebSite: 'https://www.vietmaisolutions.com/',
          companyMeta: 'Software development and technology solutions consulting.',
          datesBetween: '2011.09 - 2012.12',
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
          items: [
            { title: 'Kwadraad', projectUrl: '', description: 'A tool for social worker. We update it to version 4 using API Platform.' },
          ]
        },
        {
          sectionHeader: 'GO1',
          items: [
            { title: 'Report Builder', projectUrl: '', description: 'A reporting system. GO1 use it to present data to clients. I\'m the maintainer of the project. I work on backend and frontend sides.' },
            { title: 'Monolith', projectUrl: '', description: 'A tool to help developer grab all micro-services and frontend to help debug and test our code.' },
          ]
        },
        {
          sectionHeader: 'Personal',
          items: [
            { title: 'Pact PHP', projectUrl: 'https://github.com/pact-foundation/pact-php', description: 'PHP version of Pact (A consumer driven contract testing tool).' },
            { title: 'SICOPE Model', projectUrl: 'https://sicope-model.github.io', description: 'An open-source software testing tool for web application. It help tester testing web application by automatically generating test cases.' },
          ]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Certificates',
      description: '',
      icon: 'file-certificate',
      items: [
        {
          title: 'Symfony 5 Certification',
          authority: 'Symfony',
          authorityWebSite: 'https://connect.symfony.com/profile/tienvx'
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
