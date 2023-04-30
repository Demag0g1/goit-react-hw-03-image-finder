import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from '../imageGallery/ImageGallery';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    inputText: '',
    amount: 12,
    apiURL: 'https://pixabay.com/api',
    apiKey: '35920298-91199a46b82f570ed53995cb2',
    images: [],
  };

  onInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { inputText, amount, apiURL, apiKey } = this.state;

    axios
      .get(
        `${apiURL}/?q=${inputText}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${amount}&safesearch=true`
      )
      .then(res => {
        this.setState({ images: res.data.hits });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { inputText, images } = this.state;

    return (
      <>
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.onFormSubmit}>
          <button className={styles['SearchForm-button']} type="submit">
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>
          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputText}
            onChange={this.onInputChange}
          />
        </form>
      </header>
     <ImageGallery images={images} />
     </>
    );
    
  }
  ;
};

export default SearchBar;
