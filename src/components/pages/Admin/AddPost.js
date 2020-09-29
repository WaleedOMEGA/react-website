import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import { withFormik,Form } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import { FormikTextField, FormikSelectField } from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const styles = (theme) => ({
	container: {
        margin: theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'row wrap',
        width:'100%'
	},
	formControl: {
		margin: theme.spacing.unit,
	},
	leftSide: {
		flex: 4,
		height: '100%',
		margin: theme.spacing.unit * 1,
		padding: theme.spacing.unit * 3,
	},
	rightSide: {
		flex: 1,
		height: '100%',
		margin: theme.spacing.unit * 1,
		padding: theme.spacing.unit * 3,
	},
});

class AddPost extends Component{
    render() {
        const { classes } = this.props;
        return (
					<div>
						<h1>Add Post</h1>
						<Form className={classes.container}>
							<Paper className={classes.leftSide}>
								<FormikTextField
									name="title"
									label="Title"
									margin="normal"
									onChange={(e) =>
										this.props.setFieldValue(
											'slug',
											e.target.value.toLowerCase().replace(/ /g, '_'),
										)
									}
									fullWidth
								/>
								<FormikTextField name="slug" label="Slug" margin="normal" />
								<FormikTextField
									name="content"
									label="Content"
									margin="normal"
									fullWidth
								/>
							</Paper>
							<Paper className={classes.rightSide}>
								<FormikSelectField
									name="status"
									label="Status"
									margin="normal"
									options={[
										{ label: 'Unpublished', value: false },
										{ label: 'Published', value: true },
									]}
									fullWidth
                        />
                        <Button color='secondary' variant='contained' onClick={e => {
                            this.props.handleSubmit()
                        }}><SaveIcon></SaveIcon>Save</Button>
							</Paper>
						</Form>
					</div>
				);
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    admin:state.admin
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        title: '',
        slug: '',
        createdAt: '',
        status: false,
        content:''
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('title is required'),
        slug: Yup.string().required(),
        content:Yup.string().required()
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log('saving',values);
    }
})(withStyles(styles)(AddPost)));