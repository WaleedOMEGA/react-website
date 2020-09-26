import React, { Component } from 'react';
import '../components/assets/css/admin.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const drawerwidth = 240;
const styles = theme => ({
    toolbar: {
        paddingRight:24
    }
})
class AdminWrapper extends Component{
    render() {
        const { classes } = this.props;
        return (
            <div id="admin-page">
                <AppBar>
                    <Toolbar className={classes.toolbar}>
                        <IconButton>
                        <MenuIcon />
                        </IconButton>
                        <Typography
                            component='h1'
                            variant='h6'
                            color='inherit'
                            noWrap
                        >Admin</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant='permanent'
                    open={true}
                >
                    <list>
                        <ListItem>
                        Dashboard
                        </ListItem>
                    </list>
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(AdminWrapper);