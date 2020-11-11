import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { MovieRow } from '../components';

export default function MovieRowContainer({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <MovieRow>
      <h2>{title}</h2>
      <MovieRow.Left onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </MovieRow.Left>
      <MovieRow.Right onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </MovieRow.Right>

      <MovieRow.ListArea>
        <MovieRow.List X={scrollX} W={items.results.length}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieRow.Item key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt=''
                />
              </MovieRow.Item>
            ))}
        </MovieRow.List>
      </MovieRow.ListArea>
    </MovieRow>
  );
}
