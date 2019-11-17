import React from 'react';
import './App.css';
import TodoContainer from './components/todo/TodoContainer';
import BucketContainer from './components/bucket/BucketContainer';
import { Container } from 'reactstrap';
import { TAB } from './utils/constants';
import { connect } from 'react-redux';
import { fetchTodos } from './actions/TodoActions';
import { fetchBuckets } from './actions/BucketActions';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedTab: TAB.TODO
    }
  }

  componentDidMount() {
    this.props.fetchTodos();
    this.props.fetchBuckets();
  }

  selectTab = (e) => {
    let tabItem = document.getElementsByClassName('tab-item active')[0];
    tabItem.classList.remove('active');
    e.target.classList.add('active');
    this.setState({
      selectedTab: e.target.id
    });
  }

  render() {
    return (
      <div className="App" >
        <div className="nav-bar"><h4>TODO APPLICATION</h4></div>
        <div className="left-tabs">
          <div id={TAB.TODO} className="tab-item active" onClick={this.selectTab}>Todo</div>
          <div id={TAB.BUCKET} className="tab-item" onClick={this.selectTab}>Bucket</div>
        </div>
        <div className="right-body">
          <Container>
            {this.state.selectedTab === TAB.TODO ? <TodoContainer /> : <BucketContainer />}
          </Container>
        </div>

      </div>
    )
  }
}

export default connect(
  undefined,
  {
    fetchTodos,
    fetchBuckets
  }
)(App);
