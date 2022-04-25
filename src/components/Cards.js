import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Clients:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dog1.jpg'
              text='Click for more info'
              label='Molly'
              path='/registration'
            />
            <CardItem
              src='images/dog2.jpg'
              text='Click for more info'
              label='Wilmer'
              path='/registration'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dog3.jpg'
              text='Click for more info'
              label='Bella'
              path='/registration'
            />
            <CardItem
              src='images/dog4.jpg'
              text='Click for more info'
              label='Bosse'
              path='/registration'
            />
            <CardItem
              src='images/dog5.jpg'
              text='Click for more info'
              label='Adrenaline'
              path='/registration'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;