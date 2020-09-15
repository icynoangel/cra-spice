import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { fetchExamples } from '../../actions/example';
import FetchData from '../Wrappers/FetchData';

const Examples = () => {
  const examples = useSelector((state) => state.examples, shallowEqual);
  const { data } = examples;

  const fetchDataWrapperProps = {
    fetchData: fetchExamples,
    error: examples.error,
    isFetching: examples.isFetching,
    fetched: examples.fetched
  };
  return (
    <FetchData {...fetchDataWrapperProps}>
      <div>
        {data &&
          data.map((example) => <div key={example.id}>{example.name}</div>)}
      </div>
    </FetchData>
  );
};

export default Examples;
