import React from 'react';
import SearchBox from '../searchBox/search';
import FilterPosts from '../filterBox/FilterPosts';
import Posts from '../posts/Posts';

export default ()=> {
    return (
      <div className="row">
        <section className="col-md-8">
          <Posts />
        </section>
        <section className="col-md-4">
          <SearchBox />
          <FilterPosts />
        </section>
      </div>
    )
}
