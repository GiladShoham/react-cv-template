import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/theme/styles.css';

const envelope = 'https://storage.googleapis.com/bit-assets/geektime-resume/envelope.svg';
const github = 'https://storage.googleapis.com/bit-assets/geektime-resume/github.svg';
const globe = 'https://storage.googleapis.com/bit-assets/geektime-resume/globe.svg';
const linkedin = 'https://storage.googleapis.com/bit-assets/geektime-resume/linkedin.svg';
const phone = 'https://storage.googleapis.com/bit-assets/geektime-resume/phone.svg';
const twitter = 'https://storage.googleapis.com/bit-assets/geektime-resume/twitter.svg';

/**
 * @render react
 * @name ContactDetails
 * @description ContactDetails description
 * @example
 * <ContactDetails  
    mail="shoham.gilad@gmail.com"
    phoneNumber="+972-050-xxxxxx"
    website="medium.com/@giladshoham" 
    linkedin="linkedin.com/in/shohamgilad/" 
    github="github.com/GiladShoham" 
    twitter="twitter.com/ShohamGilad?lang=en"
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
      <li className={className} style={{marginBottom: "15px", fontFamily: 'Roboto', 'fontSize':'14px', textAlign: 'left'}}>
        <img src={iconName} style={{display: 'inline', width: '15px', marginRight:'5px', marginBottom: '2px'}}/>
        <a href={`//${href}`} target="_blank" style={{color:"#fff", textDecoration: 'none'}}> {data} </a>
      </li>
    );
  }
  render() {
    return (
      <div className="contact-container container-block" style={{background:"#42A8C0", padding: '30px', maxWidth: '267px'}}>
        <ul className="list-unstyled contact-list" style={{listStyle: "none"}}>
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
