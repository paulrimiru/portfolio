import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
  @Prop() private title!: string;
  @Prop() private iconUrl!: string;
  @Prop() private description!: string;
  @Prop() private onLearnMoreClick!: () => void;
}
