export default function handler(req, res) {
  const posts = [
    { id: '1', title: 'Understanding ISR in Next.js', content: 'ISR allows you to...' },
    { id: '2', title: 'Next.js Custom Server Setup', content: 'Custom servers in Next.js...' },
    { id: '3', title: 'Optimizing SEO with Next.js', content: 'SEO is crucial for...' },
  ];
  res.status(200).json(posts);
}

