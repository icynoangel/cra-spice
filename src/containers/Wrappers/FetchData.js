import ErrorBoundary from '../../components/Placeholders/ErrorBoundary';
import Loading from '../../components/Placeholders/Loading';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const FetchDataWrapper = (props) => {
  const { payload, fetchData, resetData, error, isFetching, fetched } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchData) {
      dispatch(fetchData(payload));
    }

    return () => {
      if (resetData) {
        resetData();
      }
    };
  }, [payload, fetchData, resetData, dispatch]);

  if (error) {
    return <ErrorBoundary hasError={!!error} />;
  }
  if (isFetching || !fetched) {
    return <Loading />;
  }
  return <>{props.children}</>;
};

export default FetchDataWrapper;
