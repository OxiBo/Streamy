import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  //   renderInput(formProps) {
  //     console.log(formProps);
  //     return (
  //       <input {...formProps.input}/>
  //     //    onChange={formProps.input.onChange}
  //     //     value={formProps.input.value}
  //     );
  //   }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    // event.preventDefault();  don't do it with redux-form because this.props.handleSubmit does it automatically

    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    // run if the user did not enter the title
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    // run if the user did not enter the title
    errors.description = "You must enter a title";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate // same as validate: validate (ES6 syntax)
})(StreamForm);

// possible to use connect like this
/*

export default connect()(reduxForm({
  form: "streamCreate",
  validate // same as validate: validate (ES6 syntax)
})(StreamCreate));

*/
