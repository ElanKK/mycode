import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Posts</h1>
      <ul style={styles.postList}>
        {posts.map(post => (
          <li key={post.id} style={styles.postItem}>
            <Link href={`/posts/${post.id}`} style={styles.postLink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
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
  },
  title: {
    fontSize: '2.5em',
    textAlign: 'center',
    margin: '20px 0',
    color: '#333',
  },
  postList: {
    listStyleType: 'none',
    padding: 0,
  },
  postItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  postLink: {
    fontSize: '1.5em',
    color: '#0070f3',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

// Apply hover effect to the post links
styles.postLink[':hover'] = {
  color: '#005bb5',
};

