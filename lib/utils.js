import { API_HOST } from './constants'

export const getImage = (image) => {
  return `https://www.alpha-orbital.com/assets/images/post_img/${image}`
}

export const getArticleUrl = (slug) => {
  return `https://www.alpha-orbital.com/news/${slug}`
}

export const fetchNews = async (filter, query) => {
  const res = await fetch(API_HOST);
  const news = await res.json();
  return filterNews(news, filter, query);
}

export const filterNews = (news, filter, query) => {
  let filteredNews = news;

  if (filter) {
    filteredNews = filteredNews.filter((newsItem) => {
      return newsItem.post_category_id === filter;
    })
  }

  if (query?.length > 3) {
    filteredNews = filteredNews.filter((newsItem) => {
      const regExp = new RegExp(query, 'i');
      return regExp.test(newsItem.title) || regExp.test(newsItem.excerpt)
    })
  }

  return filteredNews;
}