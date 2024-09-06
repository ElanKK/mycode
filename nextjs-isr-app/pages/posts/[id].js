export default function Post({ post }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <p style={styles.content}>{post.content}</p>
      <a href="/posts" style={styles.backLink}>← Back to Posts</a>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();
  const post = posts.find(post => post.id === params.id);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5em',
    textAlign: 'center',
    margin: '20px 0',
    color: '#333',
  },
  content: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '40px',
  },
  backLink: {
    display: 'block',
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '1em',
    color: '#0070f3',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

// Apply hover effect to the back link
styles.backLink[':hover'] = {
  color: '#005bb5',
};

