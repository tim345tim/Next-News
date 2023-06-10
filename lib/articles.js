function stripArticle(article) {
    return {
        title: article.title, 
        description: article.description, 
        url: article.url,
    };
}

export async function getArticles() {
    const api_key = process.env.API_KEY;
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${api_key}&limit=3&languages=en&categories=general`);
    const responseJSON = await response.json();
    const articles = responseJSON["data"];
    return articles.map(stripArticle);
}