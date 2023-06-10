import Head from 'next/head';
import ArticleCard from '@/components/ArticleCard';

export async function getStaticProps() {
  const articles = await getArticles();
  return { 
    props: { articles },
    revalidate: 86400,
  };
}

function stripArticle(article) {
  return {
      title: article.title, 
      description: article.description, 
      url: article.url,
  };
}

export async function getArticles() {
  const api_key = process.env.API_KEY;
  const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${api_key}&limit=20&languages=en&categories=business`);
  const responseJSON = await response.json();
  const articles = await responseJSON["data"];
  // return articles.map(stripArticle);
  return articles;
}

function BusinessPage({ articles }) {
  return (
    <>
      <Head>
        <title>News!</title>
      </Head>
      <main className="px-6 py-4 bg-slate-100">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles && articles.map((article, index) => (
              <ArticleCard article={article} key={index} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default BusinessPage;