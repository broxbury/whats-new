import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
  it.only('displays correct information in the NewsArticle', () => {
    const { getByText } = render(<NewsArticle
                                  id={1}
                                  headline="The Who postpones Denver Concert at the Pepsi Center"
                                  description="Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter."
                                  url="https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/"
    />);
    expect(getByText("The Who postpones Denver Concert at the Pepsi Center")).toBeInTheDocument(); 
    expect(getByText("Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.")).toBeInTheDocument(); 
  })
})