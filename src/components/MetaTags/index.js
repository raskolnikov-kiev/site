import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { changeMetaTags } from '@/utils/meta';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      changeMetaTags();
    }
  }

  componentDidMount() {
    changeMetaTags();
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
