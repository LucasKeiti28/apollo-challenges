import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import Home from '../pages/Home';

import ChallengeIniciante1 from '../pages/Iniciante/C1';
import ChallengeIniciante2 from '../pages/Iniciante/C2';

export default function Routes() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/challengeiniciante1" component={ChallengeIniciante1} />
      <Route path="/challengeiniciante2" component={ChallengeIniciante2} />
    </NativeRouter>
  );
}
