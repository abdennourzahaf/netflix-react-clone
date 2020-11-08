import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  console.log('Browse -> series', series);
  const { films } = useContent('films');
  console.log('Browse -> films', films);
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
