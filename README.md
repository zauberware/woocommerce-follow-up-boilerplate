# WooCommerce Follow-Up Emails Template Builder

Helps you to develop awesome template for https://woocommerce.com/products/follow-up-emails/

## Setup

Clone repo and run `npm install`.

Build the template with `npm run build`.

## Develop

Run watch with `npm run start`.

Open your email `dist/index.html`


## Apply inline styling

index-2.html includes inline styles with "inliner".

Another option is juice. Compile inline styles with juice for `dist/index.html` with `npm run juice`.

## Plugin integration

Copy `dist/index-2.html` to `your-plugin/follow-up-emails/emails/template-name.html`

## Test Mail with nodemailer

Rename `env.sample` to `.env`. This file will be ignored by `git`, so you don't have to worry about storing your passwords there. It's not the best approach possible, but a) your password won't be stored in your `.bash_history`; b) it's simple.

That `.env` file needs the following contents:

```
SMTP_HOST=smtp.1und1.de
SMTP_USER=username@fromaccount.com
SMTP_PASS=yourpassword
MAIL_TO=you@toaccount.com
```

