import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
//import * as actions from '../actions';
import { fetchUser } from '../actions/authActions';
import Header from './Header';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" components={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
      fetchUser: () => dispatch(fetchUser()),
    };
};

export default connect(null, mapDispatchToProps)(App)


