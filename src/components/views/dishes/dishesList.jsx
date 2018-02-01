import React, { Component } from 'react';
import {
  Image,
} from 'semantic-ui-react';
import DishCard from './dishCard'
import Footer from '../static/footerhome'

const DishesList = (dishes) => (
  <div>
  <Image src ="https://firebasestorage.googleapis.com/v0/b/oreo-nibl.appspot.com/o/dishsearch.png?alt=media&token=a33f4c85-8954-4d02-8911-7511e3881285"/>
  <ul>
    {
      dishes.map((dish, i) => {
        return (
        <li className="listStyle" key={i}>
            <DishCard dish={dish} />
        </li>
      )})
    }
  </ul>
  <br/><br/><br/><br/>
  <Footer />
  </div>
);

export default DishesList
