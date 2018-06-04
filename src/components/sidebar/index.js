import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from './profileContainer';
import ContactDetails from './contactDetails';
import EducationDetails from './educationDetails';
import LanguageDetails from './languageDetails';
import Interests from './interests';
import '../../assets/theme/styles.css';

/**
 * @render react
 * @name Sidebar
 * @description Sidebar description
 * @example
 * <Sidebar  
    name="Gilad Shoham"
    title="Dev & Open source Leas=der"
    imagePath="https://en.gravatar.com/userimage/51779316/975a7ab5400cfac3e90be71f242241eb.jpg?size=200"
    mail="shoham.gilad@gmail.com"
    phoneNumber="+972-050-xxxxxx"
    website="www.giladshoham.com" 
    linkedin="https://www.linkedin.com/in/shohamgilad/" 
    github="https://github.com/GiladShoham" 
    twitter="https://twitter.com/ShohamGilad"
    educationDetails={{list: [{ 
      name: 'Computer programming', 
      school: 'IDF - Basmach (Mamram)', 
      date: '2006-2007' 
    }]}}
    languages={{list:[{ name: 'Hebrew', level: 'Native' }, { name: 'English', level: 'Professional' }]}}
    interests={{list:['Cycling', 'Technologies', 'Reading']}}
  />
 */

export default class Sidebar extends Component {
  renderInterests() {
    if (this.props.interests) {
      return (<Interests list={this.props.interests.list} title={this.props.interests.sectionTitle} />);
    }
    return null;
  }
  renderLanguages() {
    if (this.props.languages) {
      return (<LanguageDetails list={this.props.languages.list} title={this.props.languages.sectionTitle} />);
    }
    return null;
  }
  renderEducationDetails() {
    if (this.props.educationDetails) {
      return (<EducationDetails list={this.props.educationDetails.list} title={this.props.educationDetails.sectionTitle} />);
    }
    return null;
  }

  renderProfileContainer() {
    return (<ProfileContainer
      name={this.props.name}
      title={this.props.title}
      imagePath={this.props.imagePath}
    />);
  }

  renderContactDetails() {
    return (<ContactDetails
      mail={this.props.mail}
      phoneNumber={this.props.phoneNumber}
      website={this.props.website}
      linkedin={this.props.linkedin}
      github={this.props.github}
      title={this.props.title}
      twitter={this.props.twitter}
    />);
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        {this.renderProfileContainer()}
        {this.renderContactDetails()}
        {this.renderEducationDetails()}
        {this.renderLanguages()}
        {this.renderInterests()}
      </div>
    );
  }
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  educationDetails: PropTypes.shape().isRequired,
  languages: PropTypes.shape().isRequired,
  interests: PropTypes.shape().isRequired,
};

Sidebar.defaultProps = {
  imagePath: null,
  phoneNumber: null,
  website: null,
  linkedin: null,
  github: null,
  twitter: null
};
