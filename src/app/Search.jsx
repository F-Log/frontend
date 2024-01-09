import React from 'react';

function Search() {
    return <main className="main-content">
          {/* 검색 창 */}
          <div className="search-bar">
            <input type="text" placeholder="음식 검색" />
            <button>검색</button>
          </div>
          {/* 콘텐츠 섹션 */}
          <section className="content">
            <article className="food-list">
              {/* 음식 리스트 */}
            </article>
            <aside className="sidebar">
              {/* 필터 및 옵션 */}
            </aside>
          </section>
        </main>;
  }

export default Search;