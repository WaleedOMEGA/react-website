import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import {
	withFormik,
	Form
} from 'formik';
import * as Yup from 'yup';
import {
	withStyles
} from '@material-ui/core/styles';
import {
	FormikTextField,
	FormikSelectField
} from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
	withRouter
} from 'react-router-dom';

const styles = (theme) => ({
	container: {
		margin: theme.spacing.unit * 3,
		display: 'flex',
		flexDirection: 'row wrap',
		width: '100%'
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

class AddPost extends Component {
	componentDidUpdate(props, state) {
		if (this.props.match.params.view === 'add' && this.props.admin.posts.filter(p => p.title === this.props.values.title).length > 0) {
			const post = this.props.admin.posts.filter(
				p => p.title === this.props.values.title
			)[0];
			this.props.history.push('/admin/posts/edit' + post.dispatch)
		}
	}
	componentDidMount(props, state) {
		if (this.props.match.params.view === 'edit' && this.props.match.params.id) {
			this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
		}
		if (this.props.admin.post.id !== props.admin.post.id) {
			this.props.setValues(this.props.admin.post);
		}
	}
	render() {
		const {
			classes
		} = this.props;
		return ( <
			div >
			<
			h1 > Add Post < /h1> <
			Form className = {
				classes.container
			} >
			<
			Paper className = {
				classes.leftSide
			} >
			<
			FormikTextField name = "title"
			label = "Title"
			margin = "normal"
			onChange = {
				(e) =>
				this.props.setFieldValue(
					'slug',
					e.target.value.toLowerCase().replace(/ /g, '_'),
				)
			}
			fullWidth /
			>
			<
			FormikTextField name = "slug"
			label = "Slug"
			margin = "normal" / >
			<
			FormikTextField name = "content"
			label = "Content"
			margin = "normal"
			fullWidth /
			>
			<
			/Paper> <
			Paper className = {
				classes.rightSide
			} >
			<
			FormikSelectField name = "status"
			label = "Status"
			margin = "normal"
			options = {
				[{
						label: 'Unpublished',
						value: false
					},
					{
						label: 'Published',
						value: true
					},
				]
			}
			fullWidth /
			>
			<
			Button color = 'secondary'
			variant = 'contained'
			onClick = {
				e => {
					this.props.handleSubmit()
				}
			} > < SaveIcon > < /SaveIcon>Save</Button >
			<
			/Paper> <
			/Form> <
			/div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	admin: state.admin
});

const mapDispatchToProps = (dispatch) => ({
	addPost: (post, token) => {
		dispatch(AdminActions.addPost(post, token));
	},
	updatePost: (post, token) => {
		dispatch(AdminActions.updatePost(post, token));
	},
	getSinglePost: (id, token) => {
		dispatch(AdminActions.getSinglePost(id, token));
	},
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(withFormik({
	mapPropsToValues: (props) => ({
		title: props.admin.post.title || '',
		slug: props.admin.post.slug || '',
		createdAt: props.admin.post.createdAt || '',
		status: props.admin.post.status || false,
		content: props.admin.post.content || ''
	}),
	validationSchema: Yup.object().shape({
		title: Yup.string().required('title is required'),
		slug: Yup.string().required(),
		content: Yup.string().required()
	}),
	handleSubmit: (values, {
		setSubmitting,
		props
	}) => {
		console.log('saving', props.addPost);
		if (props.match.params.view === 'edit') {
			const post={
									...values,
									id:props.match.params.id
			}
			props.updatePost(post, props.auth.token);
		} else {
			props.addPost(values, props.auth.token);
		}

	}
})(withStyles(styles)(AddPost))));