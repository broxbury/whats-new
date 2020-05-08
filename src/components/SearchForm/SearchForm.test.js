import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm'

describe('SearchForm', () => {
  it('should pass the search input value to the App component', () => {  

    const mockFilterSearch = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchForm submitInput={mockFilterSearch}/>);

    fireEvent.change(getByPlaceholderText('SEARCH ARTICLES HERE'), {target: {value: 'car2go leaving denver'}});
    fireEvent.click(getByText('Search'));

    expect(getByPlaceholderText('SEARCH ARTICLES HERE').value).toEqual('');
    expect(mockFilterSearch).toHaveBeenCalledWith('car2go leaving denver');
  })
})