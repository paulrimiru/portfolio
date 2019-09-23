import { Component, Vue } from 'vue-property-decorator';

import LandingPage from '@/views/LandingPage/LandingPage';
import Card from '@/components/Card/Card';
import PortfolioPage from '@/views/PortfolioPage/PortfolioPage';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { StyledDiv } from '@/components/Styled';

@Component({
  data: () => ({
    pages: ['About Me', 'Portfolio', 'Download cv'],
    values: [
      {
        title: 'On time',
        description: 'Time is essential to any project, I make sure the project runs as smoothly as possible',
        iconUrl: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559900075/stopwatch.svg',
        // tslint:disable-next-line:no-empty
        onLearnMoreClick: () => {},
      },
      {
        title: 'Clean work',
        description: 'I take pride in my work, which means when we work together I give it 110% all the time',
        iconUrl: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559900032/happy.svg',
        // tslint:disable-next-line:no-console
        onLearnMoreClick: () => { console.log('learning more'); },
      },
      {
        title: 'Client satisfaction',
        description: 'I make sure that my clients leave with a smile on their faces',
        iconUrl: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559900057/suitcase.svg',
        // tslint:disable-next-line:no-console
        onLearnMoreClick: () => { console.log('learning more'); },
      },
    ],
  }),
  components: {
    LandingPage,
    Card,
    PortfolioPage,
    Carousel3d,
    Slide,
    StyledDiv,
  },
})

export default class App extends Vue {}
