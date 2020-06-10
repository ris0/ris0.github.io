import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import useMouse from 'react-use/lib/useMouse';
import {
  App, Button, Title, Image
} from '../../style/home';
import useClientRect from '../../hooks/useClientRect';
import { incrementCounter, decrementCounter, resetCounter } from './homePage';
import Counter from '../../components/Counter';
import logo from '../../assets/images/logo.svg';

const HomePage = () => {
  const appRef = React.useRef(null);
  // const { docX, docY } = useMouse(appRef);
  const dispatch = useDispatch();
  const { counter, resetLoading } = useSelector(state => state.Home, shallowEqual);
  const [rect, ref] = useClientRect();
  // const center = getCoordinates(rect !== null ? rect : {});

  const increment = () => {
    dispatch(incrementCounter(counter));
  };

  const decrement = () => {
    dispatch(decrementCounter(counter));
  };

  // const calculateAngle = () => {
  //   const opp = docY - center.y;
  //   const adj = docX - center.x;
  //   return (Math.atan(opp / adj) * 180) / Math.PI;
  // };

  return (
    <App ref={appRef} className="profile-card">
      {/* <Image className="logo" src={logo} ref={ref} angle={calculateAngle()} /> */}
      <Image className="logo" src={logo} ref={ref} />
      <Title>Misfits Market</Title>
      <Button type="button" onClick={increment}>+</Button>
      <Button type="button" onClick={decrement}>-</Button>
      <Counter counter={counter} />
      <Button loading={resetLoading} type="button" onClick={() => { dispatch(resetCounter()); }}>Reset</Button>
    </App>
  );
};

const getCoordinates = (rect) => {
  const {
    x, y, width, height
  } = rect;
  return { x: x + width / 2, y: y + height / 2 };
};

export default HomePage;
