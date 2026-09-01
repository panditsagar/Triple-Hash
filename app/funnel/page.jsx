// app/whitepaper/page.tsx
import { redirect } from 'next/navigation';

export default function GoogleDocRedirect() {
  // Replace this URL with your actual Google Doc link
  redirect('https://docs.google.com/document/d/1X6XtiRk9xUIajtXEldgvRXFcm7gVGI-O6HexpQJAjPA/edit?tab=t.0');
}