import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    projects: Array.apply(null, { length: 6 } as any).map((item, index) => 'Project: ' + index),
  }),
})
export default class PortfolioPage extends Vue {}
