export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@akshayxml',
  site: 'akshayxml.com',
  links: {
    github: 'https://github.com/akshayxml',
    linkedin: 'https://linkedin.com/in/akshayxml',
    twitter: 'https://twitter.com/akshayxml',
    email: 'mailto:akshayknr7@gmail.com',
  },
};
