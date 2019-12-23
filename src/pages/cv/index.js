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
      { type: 'website', value: 'tienvx.tk' },
      { type: 'linkedin', value: 'linkedin.com/in/tienxuanvo' },
      { type: 'twitter', value: 'twitter.com/tienvoxuan' },
      { type: 'github', value: 'github.com/tienvx' }
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'Hi, my name\'s Tien and I\'m a senior PHP developer with over 6 years experience. I was a full stack developer at GO1, working on an e-learning platform. I love learning new things by working on new projects.',
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Information Technology (BS)',
          authority: 'University of Science, Ho Chi Minh City',
          authorityWebSite: 'https://web.hcmus.edu.vn/en/',
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
          company: 'GO1',
          description: 'I was a Drupal developer. Then I work with Silex based micro-services, and AngularJS',
          companyWebSite: 'https://www.go1.com/',
          companyMeta: 'E-learning portal',
          datesBetween: '2013.04 - 2019.07',
          descriptionTags: ['Drupal', 'Silex', 'Symfony', 'AngularJS', 'RabbitMQ', 'ReactJS', 'ElasticSearch', 'PHPUnit', 'Protractor', 'Testcafe', 'Codeception']
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
          datesBetween: '2011.09 - 2012.12'
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      description: 'I am the key member of these projects',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'GO1',
          description: 'Internal projects that I contribute most',
          items: [
            { title: 'Report Builder', projectUrl: '', description: 'A reporting system. GO1 use it to present data to clients. I\'m the maintainer of the project. I work on backend and frontend sides.' },
            { title: 'Monolith', projectUrl: '', description: 'A tool to help developer grab all micro-services and frontend to help debug and test our code.' },
          ]
        },
        {
          sectionHeader: 'Personal',
          description: 'Personal projects that I am founder',
          items: [
            { title: 'MBT Bundle', projectUrl: 'https://mbtbundle.org', description: 'An open-source software testing tool. It help tester testing software by automatically generating test cases.' },
          ]
        }
      ]
    },
    /*{
      type: 'common-list',
      title: 'Conferences & Certificates',
      description: '',
      icon: 'comments',
      items: [
        {
          title: 'Some Conferences / 2019',
          authority: 'SomeConf',
          authorityWebSite: 'https://www.someconf.somesome'
        },
        {
          title: 'Some Conferences / 2019',
          authority: 'SomeConf',
          authorityMeta: 'Speaker',
          authorityWebSite: 'https://www.someconf.somesome',
          rightSide: 'test'
        },
        {
          title: 'Some Conferences / 2012',
          authorityMeta: 'Speaker'
        }
      ]
    },*/
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
      items: ['Symfony 4', 'PHP', 'Composer', 'XDebug', 'Docker', 'Docker Compose', 'Git', 'Github', 'Gitlab', 'Mysql', 'Elasticsearch', 'Kubernetes', 'ReactJS', 'AngularJS']
    },
    {
      type: 'tag-list',
      title: 'Hobies & Interests',
      icon: 'cubes',
      items: ['Gaming', 'Soccer', 'Open Source', 'Physics']
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
