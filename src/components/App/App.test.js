import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('should filter news by category', () => {
 
  const local = [
    {
      id: 1,
      headline: 'The Who postpones Denver Concert at the Pepsi Center',
      img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
      description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
      url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
    },
    {
      id: 2,
      headline: 'Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner',
      img: 'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376',
      description: 'The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.',
      url: 'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
    },
    {
      id: 3,
      headline: 'Car2Go leaving Denver amid company shake-up',
      img: 'https://www.denverpost.com/wp-content/uploads/2017/06/cd20carsharingdsc_8786.jpg?w=859',
      description: 'Car2Go, the popular car-sharing and rental company, will be leaving Denver at the end of the October, the company announced Friday.',
      url: 'https://www.denverpost.com/2019/09/27/car2go-leaving-denver/'
    }
  ]

  const entertainment = [
    {
      id: 1,
      headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
      img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
      description: 'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
      url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
    },
    {
      id: 2,
      headline: 'Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews',
      img: 'https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png',
      description: 'While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.',
      url: 'https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086'
    },
    {
      id: 3,
      headline: 'Snoop Dogg’s Newborn Grandson Dies Just 10 Days After His Birth',
      img: 'https://i.kinja-img.com/gawker-media/image/upload/s--36OH1KfJ--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/k5ppabp7phb3cq6vsv49.jpg',
      description: 'Snoop’s son Corde Broadus shared the news on Instagram that his baby, Kai Love, died this week just 10 days after his birth.',
      url: 'https://thegrapevine.theroot.com/snoop-dogg-s-newborn-grandson-dies-just-10-days-after-h-1838547124'
    }
  ]

  const { getByPlaceholderText, getByText, getByLabelText } = render(<App />);

  fireEvent.click(getByLabelText('entertainment-unique'))
});
