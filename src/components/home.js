import React from "react";
import { Grid, Image, Segment } from 'semantic-ui-react'

const Home = () => (
  <div >
  
    <h1>Welcome to Nibl!</h1>
    <Segment>
      <Grid columns={2}>
       <Grid.Column>
         <Image
           fluid
           label={{ as: 'a', corner: 'left', icon: 'heart' }}
           src='https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?h=350&auto=compress&cs=tinysrgb'
         />
       </Grid.Column>
      </Grid>
    </Segment>

  </div>
);

export default Home;
