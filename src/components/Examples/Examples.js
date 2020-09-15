import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchExamples} from '../../actions/example';
import {withFetchData} from '../../utils/decorators';

class Examples extends Component {
  static propTypes = {
    data: PropTypes.array,
    isFetching: PropTypes.bool,
    error: PropTypes.object
  };

  render() {
    const {data} = this.props;
    return (
      <div>
        {data &&
          data.map((example) => <div key={example.id}>{example.name}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {examples} = state;
  return {
    data: examples.data || [],
    isFetching: examples.isFetching,
    error: examples.error
  };
};

const mapDispatchToProps = {
  fetchData: fetchExamples
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchData()
);

export default enhance(Examples);
