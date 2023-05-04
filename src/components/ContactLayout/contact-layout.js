import React from 'react';
import ContactForm from './contact-form';
import './contact-layout.scss';
export default class ContactLayout extends React.Component {
  render() {
    return (
      <div className="contactLayoutWrapper">
        <div className="contactFormWrapper">
          <ContactForm></ContactForm>
        </div>
      </div>
    );
  }
}
