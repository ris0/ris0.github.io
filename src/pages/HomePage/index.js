import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import useMouse from 'react-use/lib/useMouse';
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

  return (
    <App ref={appRef}>
      <Image src={logo} ref={ref} />
      <ul>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
      </ul>
    </App>
  );
};

// return (
//   <App ref={appRef} className="profile-card">
//     {/* <Image className="logo" src={logo} ref={ref} angle={calculateAngle()} /> */}
//     <Image className="logo" src={logo} ref={ref} />
//     <Title>Misfits Market</Title>
//     <Button type="button" onClick={increment}>+</Button>
//     <Button type="button" onClick={decrement}>-</Button>
//     <Counter counter={counter} />
//     <Button loading={resetLoading} type="button" onClick={() => { dispatch(resetCounter()); }}>Reset</Button>
//   </App>
// );

export default HomePage;
