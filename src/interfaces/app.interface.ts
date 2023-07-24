import { ISocialProps } from "./social.interface";

export interface IAppProps {
  message: string;
  title: string;
  author: string;
  socials?: ISocialProps;
  username?: string;
  website?: string;
  email?: string;
}
