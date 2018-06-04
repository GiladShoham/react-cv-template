import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/theme/styles.css';

import envelope from './icons/envelope.svg';
import phone from './icons/phone.svg';
import globe from './icons/globe.svg';
import github from './icons/github.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';

/**
 * @render react
 * @name ProfileContainer
 * @description ProfileContainer description
 * @example
 * <ProfileContainer  
    mail="shoham.gilad@gmail.com"
    phoneNumber="+972-050-xxxxxx"
    website="www.giladshoha.com" 
    linkedin="https://www.linkedin.com/in/shohamgilad/" 
    github="https://github.com/GiladShoham" 
    twitter="https://twitter.com/ShohamGilad?lang=en"
  />
 */
export default class ContactDetails extends Component {
  renderListItem(className, data, iconName, type) {
    if (!data) { return null; }
    let href = data;
    switch (type) {
      case 'email':
        href = `mailto: ${data}`;
        break;
      case 'phone':
        href = `tel:${data}`;
        break;
    }
    return (
      <li className={className}>
        <img src={iconName} style={{display: 'inline', width: '15px', marginRight:'5px', marginBottom: '2px'}}/>
        <a href={`//${href}`} target="_blank"> {data} </a>
      </li>
    );
  }
  render() {
    return (
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
         {this.renderListItem('email', this.props.mail, envelope, 'email')}
          {this.renderListItem('phone', this.props.phoneNumber, phone, 'phone')}
          {this.renderListItem('website', this.props.website, globe, 'link')}
          {this.renderListItem('linkedin', this.props.linkedin, linkedin, 'link')}
          {this.renderListItem('github', this.props.github, github, 'link')}
          {this.renderListItem('twitter', this.props.twitter, twitter, 'link')}
        </ul>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

ContactDetails.defaultProps = {
  phoneNumber: null,
  website: null,
  linkedin: null,
  github: null,
  twitter: null
};
