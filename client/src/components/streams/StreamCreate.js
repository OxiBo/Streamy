import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  //   renderInput(formProps) {
  //     console.log(formProps);
  //     return (
  //       <input {...formProps.input}/>
  //     //    onChange={formProps.input.onChange}
  //     //     value={formProps.input.value}
  //     );
  //   }

  onSubmit = formValues => {
    console.log(formValues);
    // event.preventDefault();  don't do it with redux-form because this.props.handleSubmit does it automatically

    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

// possible to use connect like this
/*

export default connect()(reduxForm({
  form: "streamCreate",
  validate // same as validate: validate (ES6 syntax)
})(StreamCreate));

*/
