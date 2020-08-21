import React from 'react';
import ArticleItemComponent from './ArticleItem';

class ArticlesListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount = async () => {
    const response = await fetch('/articles');
    const data = await response.json();
    this.setState({ articles: data });
  };
  render() {
    return (
      <ul>
        {this.state.articles.map((article, index) => {
          return (
            <li key={index}>
              <ArticleItemComponent />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArticlesListComponent;
