export default function sitemap(){
  const base="https://nexvolt.co.ke"
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    { url: `${base}/solutions`, lastModified: new Date() },
    { url: `${base}/calculator`, lastModified: new Date() },
    { url: `${base}/finder`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ]
}
