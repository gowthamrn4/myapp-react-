import React, { Component, forwardRef } from 'react';
import Header from '../../../Components/Header/index';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import * as Common from '../../../Action/Common';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

class HashTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            columns: [
                { title: 'Tag', field: 'tag' },
                { title: 'Description', field: 'description' },
                { title: 'isTrending', field: 'isTrending', lookup: { true: 'Yes', false: 'No' } },
                { title: 'isActive', field: 'isActive', lookup: { true: 'Yes', false: 'No' } }
            ],
        };
        this.props.gethashtag()
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        let value = this.state.value
        console.log('hash tag', this.props.allTrendingTags)
        return (
            <div>
                <Header />
                <div style={{
                    flexGrow: 1,
                    backgroundColor: 'white',
                    display: 'flex',
                    padding: 20
                }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={this.handleChange}
                        aria-label="Vertical tabs example"
                    >
                        <Tab label="All HashTag" {...a11yProps(0)} />
                        <Tab label="Trending" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0} style={{ width: '100%' }}>
                        <div>
                            <MaterialTable
                                icons={tableIcons}
                                title="#HashTag"
                                columns={this.state.columns}
                                data={this.props.allTags}
                                editable={{
                                    onRowAdd: (newData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                console.log('new data', newData)
                                                this.props.createhashtag(newData)
                                            }, 600);
                                        }),
                                    onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                if (oldData) {
                                                    this.setState((prevState) => {
                                                        const data = [...prevState.data];
                                                        data[data.indexOf(oldData)] = newData;
                                                        return { ...prevState, data };
                                                    });
                                                }
                                            }, 600);
                                        }),
                                    onRowDelete: (oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                this.setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data.splice(data.indexOf(oldData), 1);
                                                    return { ...prevState, data };
                                                });
                                            }, 600);
                                        }),
                                }}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ width: '100%' }}>
                        <div>
                            <MaterialTable
                                icons={tableIcons}
                                title="#Trending"
                                columns={this.state.columns}
                                data={this.props.allTrendingTags}
                            />
                        </div>
                    </TabPanel>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.AuthReducers.user,
        allTrendingTags: state.CommonReducers.allTrendingTags,
        allTags: state.CommonReducers.allTags
    }
}
function mapDispatchToProps(dispatch) {
    return {
        gethashtag: () => dispatch(Common.GET_HASHTAG()),
        createhashtag: (val) => dispatch(Common.CREATE_NEWHASHTAG(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HashTag);
