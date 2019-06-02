import { Component, Vue } from 'vue-property-decorator';

import LandingPage from '@/views/LandingPage/LandingPage';

@Component({
  data: () => ({
    pages: ['About Me', 'Portfolio', 'Download cv'],
  }),
  components: {
    LandingPage,
  },
})

export default class App extends Vue {}
