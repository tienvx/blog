/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import classnames from 'classnames';
import styles from './styles.module.css';

const users = [
  // Please add in alphabetical order of title.
  {
    title: 'SICOPE Model',
    description: 'An open source model-based testing tool for web application',
    preview: 'img/projects/sicope-model.png',
    website: 'https://sicope-model.github.io',
    source: 'https://github.com/sicope-model/sicope-model',
    fbOpenSource: false,
    pinned: false,
  },
  {
    title: 'Pact PHP',
    description: 'PHP version of Pact (A consumer driven contract testing tool)',
    preview: 'img/projects/pactflow.png',
    website: 'https://pactflow.io/',
    source: 'https://github.com/pact-foundation/pact-php',
    fbOpenSource: false,
    pinned: false,
  },
  {
    title: 'Composer Downloads Plugin',
    description: "Allow download extra files for Composer's package",
    preview: 'https://via.placeholder.com/1519x1077.png?text=Composer+Download+Plugin',
    website: false,
    source: 'https://github.com/tienvx/composer-downloads-plugin',
    fbOpenSource: false,
    pinned: false,
  },
  {
    title: 'UX Collection JS',
    description: "Symfony bundle providing Symfony UX integration for collection form type",
    preview: 'https://via.placeholder.com/1519x1077.png?text=UX+Collection+JS',
    website: false,
    source: 'https://github.com/tienvx/ux-collection-js',
    fbOpenSource: false,
    pinned: false,
  },
  {
    title: 'Assignments Evaluator',
    description: "Support assignments for Symfony Expression Language",
    preview: 'https://via.placeholder.com/1519x1077.png?text=Assignments+Evaluator',
    website: false,
    source: 'https://github.com/tienvx/assignments-evaluator',
    fbOpenSource: false,
    pinned: false,
  },
  {
    title: 'Angular Elasticsearch Query Builder',
    description: "An Angular.js directive for building an Elasticsearch query.",
    preview: 'https://via.placeholder.com/1519x1077.png?text=Angular+Elastic+Builder',
    website: false,
    source: 'https://github.com/tienvx/angular-elastic-builder',
    fbOpenSource: false,
    pinned: false,
  },
];

const ITEMS_PER_ROW = 3; // Sync up the item col width if this is changed.
const TITLE = 'Projects';
const DESCRIPTION =
  "See awesome projects that I'm contributor or author";

function chunkArray(array, size) {
  const chunks = [];
  const copied = [...array];
  const numChunks = Math.ceil(copied.length / size); // Round up to the nearest integer.
  for (let i = 0; i < numChunks; i++) {
    chunks.push(copied.splice(0, size));
  }

  return chunks;
}

function Projects() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>
        {chunkArray(users, ITEMS_PER_ROW).map((row, i) => (
          <div key={`row${i}`} className="row margin-vert--lg">
            {row.map(user => (
              <div key={user.title} className="col col--4">
                <div className={classnames('card', styles.showcaseUser)}>
                  <div className="card__image">
                    <img src={useBaseUrl(user.preview)} alt={user.title} />
                  </div>
                  <div className="card__body">
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h4 className="avatar__name">{user.title}</h4>
                        <small className="avatar__subtitle">
                          {user.description}
                        </small>
                      </div>
                    </div>
                  </div>
                  {(user.website || user.source) && (
                    <div className="card__footer">
                      <div className="button-group button-group--block">
                        {user.website && (
                          <a
                            className="button button--small button--secondary button--block"
                            href={user.website}
                            target="_blank"
                            rel="noreferrer noopener">
                            Website
                          </a>
                        )}
                        {user.source && (
                          <a
                            className="button button--small button--secondary button--block"
                            href={user.source}
                            target="_blank"
                            rel="noreferrer noopener">
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
