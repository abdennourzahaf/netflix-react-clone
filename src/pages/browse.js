import React from 'react';
import NewBrowseContainer from '../containers/new-browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <NewBrowseContainer slides={slides} />;
}
