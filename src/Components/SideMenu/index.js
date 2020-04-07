
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DnsIcon from '@material-ui/icons/Dns';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AppsIcon from '@material-ui/icons/Apps';
import history from '../../Routing/history';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon> <AppsIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <GroupIcon /></ListItemIcon>
                    <ListItemText primary={'Groups'} />
                </ListItem>
                <ListItem button onClick={() => {
                    history.push('/hashtag')
                }}>
                    <ListItemIcon> <AssessmentIcon /></ListItemIcon>
                    <ListItemText primary={'Hash Tag'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <DnsIcon /></ListItemIcon>
                    <ListItemText primary={'Badges'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary={'Users'} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <React.Fragment >
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon style={{ color: 'white' }} />
                </Button>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
