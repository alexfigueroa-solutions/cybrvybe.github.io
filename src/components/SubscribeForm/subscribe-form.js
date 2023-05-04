//@ts-ignore
import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './subscribe-form.scss';

export default class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
  }
  render() {
    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
      console.log('input change');
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await addToMailchimp(this.state.email);
      this.setState({ message: result.msg });
      console.log('handle submit');
    };

    return (
      <form
        name="subscribeForm"
        method="POST"
        id="subscribeForm"
        className="subscribeForm"
        onSubmit={handleSubmit}
      >
        <div
          className="message"
          dangerouslySetInnerHTML={{ __html: this.state.message }}
        />

        <div className="formRow">
          <input
            className="subscribeEmail"
            type="email"
            name="email"
            placeholder="Enter Email Address..."
            value={this.state.email}
            onChange={handleInputChange}
          />
          <button className="button" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    );
  }
}
