import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { fetchExamples } from '../../actions/example';
import FetchDataWrapper from '../fetchDataWrapper';

const Examples = () => {
  const examples = useSelector((state) => state.examples, shallowEqual);
  const { data } = examples;

  const fetchDataWrapperProps = {
    fetchData: fetchExamples,
    error: examples.error,
    isFetching: examples.isFetching
  };
  return (
    <FetchDataWrapper {...fetchDataWrapperProps}>
      <div>
        {data &&
          data.map((example) => <div key={example.id}>{example.name}</div>)}
      </div>
    </FetchDataWrapper>
  );
};

export default Examples;
