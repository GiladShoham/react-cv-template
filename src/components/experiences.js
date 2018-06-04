import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';
import '../assets/theme/styles.css';


/**
 * @render react
 * @name Experiences
 * @description Experiences description
 * @example
 * <Experiences list={[
    {
      title: 'Dev & Open Source Leader',
      company: 'Bit (Cocycles)',
      description: `Leading bit - An open source project which is the core technology of cocycles.
      * Manage the team working on bit
      * Working with the community - Approve PRs, Answer github issues.
      * Talk in meetups and conferences
      * Hands-on - developing the platform
      At Cocycles we are building the cutting edge of developer tools.
      Our mission it to allow developers to build code like Lego - focusing on design, easily composing
       small functional pieces of code together to create any functionality.`,
      companyLink: 'http://www.bitsrc.io',
      companyShortDetail: 'Components are building blocks You are the architect',
      date: 'June 2017 - Present'
    }]} />
 */
export default class Experiences extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`exp_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{item.title}</h3>
            <div className="time">{item.date}</div>
          </div>
          {this.renderCompanySection(item.company, item.companyLink, item.companyShortDetail)}
        </div>
        <div className="details">
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    );
  }
  renderCompanySection(company, companyLink, companyShortDetail) {
    if (company && companyLink) {
      return (<div className="company"> <a href={companyLink} target="_blank">{company}</a> {companyShortDetail || ''}</div>);
    }
    return null;
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="experieces-section"
        icon={icon || 'briefcase'}
        title={sectionTitle || 'Experiences'}
        id="experiences"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Experiences.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

