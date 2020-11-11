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

      <MovieRow.ListArea>
        <MovieRow.Left X={scrollX} onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </MovieRow.Left>
        <MovieRow.Right
          X={scrollX}
          Y={window.innerWidth - items.results.length * 150 - 60}
          onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </MovieRow.Right>
        <MovieRow.List X={scrollX} W={items.results.length}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieRow.Item
                key={key}
                path={item.poster_path}
                title={item.title || item.name}
                vote={item.vote_average}
                desc={item.overview}
              />
            ))}
        </MovieRow.List>
      </MovieRow.ListArea>
    </MovieRow>
  );
}
