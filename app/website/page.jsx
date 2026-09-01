// app/whitepaper/page.tsx
import { redirect } from 'next/navigation';

export default function GoogleDocRedirect() {
  // Replace this URL with your actual Google Doc link
  redirect('https://docs.google.com/document/d/1RgbTmNd_KoUUUz5fT0ORFWWqjDd5Ey4TS2WXfvIK_-Q/edit?usp=sharing');
}