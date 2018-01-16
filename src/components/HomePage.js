import React from 'react';
import Grid from 'material-ui/Grid';

import Filters from './Filters';
import Grouping from './Grouping';
import Sorting from './Sorting';
import MainContentContainer from './MainContentContainer';
import LeftPanelInfoContainer from './LeftPanelInfoContainer';


const HomePage = ({hasData}) => {
  if (!hasData) {
    return <h1>Loading data... </h1>;
  }
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <Filters/>
          <Grouping/>
          <Sorting/>
          <LeftPanelInfoContainer style={{width: 200}}/>
        </Grid>
        <Grid item xs={9} sm={9}>
          <h1> Summary Placeholder </h1>
          <h1> Available Presets Placeholder</h1>
          <MainContentContainer/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
