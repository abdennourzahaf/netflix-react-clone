import React from 'react';
import RowItem from '../row-item';
import { Group, Left, Right, List, ListArea, Row } from './styles/movie-row';

export default function MovieRow({ title, items, children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
}

MovieRow.Group = function MovieRowGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

MovieRow.Left = function MovieRowLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

MovieRow.Right = function MovieRowRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

MovieRow.ListArea = function MovieRowListArea({ children, ...restProps }) {
  return <ListArea {...restProps}>{children}</ListArea>;
};

MovieRow.List = function MovieRowList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

MovieRow.Item = function MovieRowItem({ children, ...restProps }) {
  return <RowItem {...restProps}>{children}</RowItem>;
};
