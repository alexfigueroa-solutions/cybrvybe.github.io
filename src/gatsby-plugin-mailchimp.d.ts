// src/gatsby-plugin-mailchimp.d.ts
declare module 'gatsby-plugin-mailchimp' {
  export default function addToMailchimp(
    email: string,
    fields?: Record<string, any>,
    options?: any
  ): Promise<any>;
}
