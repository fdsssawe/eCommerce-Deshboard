# <a href="" target="_blank">Dashboard</a>
The dashboard to control products, billboards, orders etc. in eCommerce websites<br/>

# 🛠️ Stack 

### Tech stack
Next.js 13, TypeScript, Zustand, Tailwind, Clerk, Shadcn/ui, MySQL

### Resources
Vercel, PlanetScale
### Architecture diagram

# 🔧 How to run a project localy
### Dependencies recovery
Since node_modules are not in repository , you need to recover node_module for both client and server. You can do it with `npm i`
### To start application
Start with `npm run dev`
### Environment variable that you have to provide
Create `.env` file and provide following variables :
* NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY : get your publishable key <a href="https://clerk.com/docs/nextjs/get-started-with-nextjs" target="_blank">here</a>
* CLERK_SECRET_KEY : get your secret key <a href="https://clerk.com/docs/nextjs/get-started-with-nextjs" target="_blank">here</a>
* NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in : to provide the route for your sign-in page fro clerk
* NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up : to provide the route for your sign-up page fro clerk
* NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/ : route where you will be redirected after sign-in
* DATABASE_UR : url you will get after creating database at PlanetScale
* NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME : name you will be able to find in your cloudinary dashboard after you sign-up/sign-in

# Contacts :<br/>
📨 <a href="mailto:zhovanukolexander@gmail.com">Email</a><br/>
📱 <a href="https://t.me/sashazhov" target="_blank">Telegram</a>


