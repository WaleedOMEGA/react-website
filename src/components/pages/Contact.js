import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';
const fields = {
    secitons: [
        [
	{
		name: 'name',
		elementName: 'input',
		type: 'text',
		id: '',
		placeholder: 'Your Name *',
	},
	{
		name: 'email',
		elementName: 'input',
		type: 'email',
		id: '',
		placeholder: 'Your Email *',
	},
	{
		name: 'phone',
		elementName: 'input',
		type: 'tel',
		id: '',
		placeholder: 'Your Phone *',
	}
],[
	{
		name: 'message',
		elementName: 'textarea',
		type: 'text',
		id: '',
		placeholder: 'Type Your Message *',
	}
]
    ]
} 
class Contact extends Component{
    
	
    render() {
        return (
					<section className="page-section" id="contact">
						<div className="container">
							<div className="text-center">
								<h2 className="section-heading text-uppercase">Contact Us</h2>
								<h3 className="section-subheading text-muted">
									Lorem ipsum dolor sit amet consectetur.
								</h3>
							</div>
							<form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
								<div className="row align-items-stretch mb-5">
                            {fields.secitons.map((section, sectionindex) => {
                                return (
                                    <div className='col-md-6' key={sectionindex}>
                                        {section.map((field, i) => {
                                            return (
											<Field
												{...field}
												key={i}
													value={this.props.values[field.name]}
													name={field.name}
													onChange={this.props.handleChange}
													onBlur={this.props.handleBlur}
													touched={(this.props.touched[field.name])}
													errors={this.props.errors[field.name]}
											/>
										);
                                        })}
                                    </div>
                                        )
                                    })}
                            </div>
								<div className="text-center">
									<div id="success"></div>
									<button
										className="btn btn-primary btn-xl text-uppercase"
										
                                type="submit"
                                
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</section>
				);
    }
}

export default withFormik({
	mapPropsToValues :() => ({
		name: '',
		email: '',
		phone: '',
		message:''
	}),
	validate: values => {
		const errors = {};
		Object.keys(values).map(v => {
			if (!values[v]) {
				errors[v] = 'Required';
			}
		});
		return errors;
	},
	validationSchema: Yup.object().shape({
		name:Yup.string().min(3,'come on bro your name is longer than that').required('you must give us your name.')
	}),
	handleSubmit: (values, { setSubmitting }) => {
		alert('you submitted the form',JSON.stringify(values));
	}
})(Contact);