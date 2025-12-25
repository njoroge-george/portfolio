This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- 🎨 Modern, animated portfolio design with dark pink/purple theme
- 📧 Functional contact form with email notifications
- 🎭 Framer Motion animations throughout
- 📱 Fully responsive design
- ⚡ Built with Next.js 15, React 19, and TypeScript
- 🎯 SEO optimized

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email (Important!)

To enable the contact form, you need to set up email credentials:

1. Copy `.env.local` and add your email credentials
2. Follow the detailed setup guide in `EMAIL_SETUP.md`
3. Quick setup:
   - Generate a Gmail App Password at https://myaccount.google.com/apppasswords
   - Add your email and app password to `.env.local`

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Customize Content

- **Hero Section**: Edit `components/Hero.tsx` - Update name and title
- **About Section**: Edit `components/About.tsx` - Update bio and features
- **Skills**: Edit `components/Skills.tsx` - Add your skills and proficiency levels
- **Projects**: Edit `components/Projects.tsx` - Replace with your actual projects
- **Contact Info**: Edit `components/Contact.tsx` - Update email, phone, and location
- **Footer**: Edit `components/Footer.tsx` - Update social media links

### 5. Add Your Profile Image

Replace `/public/hero.jpg` with your profile image (recommended: 400x400px, square format).

## Project Structure

```
frontend/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Email API endpoint
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout with Navbar
│   └── page.tsx                  # Main page composition
├── components/
│   ├── About.tsx                 # About section
│   ├── Contact.tsx               # Contact form
│   ├── Footer.tsx                # Footer with social links
│   ├── Hero.tsx                  # Hero section with profile image
│   ├── Navbar.tsx                # Navigation bar
│   ├── Projects.tsx              # Projects showcase
│   └── Skills.tsx                # Skills display
└── public/
    └── hero.jpg                  # Your profile image
```

## Technologies Used

- **Framework**: Next.js 15.1.1
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.562.0
- **Email**: Nodemailer 6.9.16

## Contact Form Features

✅ Real-time email delivery using Nodemailer
✅ Automatic confirmation emails to senders
✅ Form validation and error handling
✅ Animated success/error messages
✅ Spam protection ready (can add reCAPTCHA)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
