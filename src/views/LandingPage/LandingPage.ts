import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    socials: [
      {
        name: 'twitter',
        url: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559462628/twitter.svg',
      },
      {
        name: 'github',
        url: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559462683/github-logo.svg',
      },
      {
        name: 'linkedin',
        url: 'https://res.cloudinary.com/mikekrantz/image/upload/v1559462663/linkedin.svg',
      },
    ],
  }),
})
export default class LandingPage extends Vue {
  @Prop() private msg!: string;
}
