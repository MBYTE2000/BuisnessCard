import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, Im MBYTE2000!</h1>
            <p>Эта страница посвящена мне (MBYTE2000) и моим проектам!</p>
            <br></br>
            <p>мои контакты:</p>
        <ul>
          <li>astriyonok@mail.ru</li>
          <li><a href='https://t.me/mbyte2000'>Telegram</a></li>
          <li><a href='www.linkedin.com/in/артём-стриёнок-b69455291'> LinkedIn</a></li>
        </ul>
      </div>
    );
  }
}
