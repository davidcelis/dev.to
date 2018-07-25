/// <reference types="Cypress" />

context('Search Actions', () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  // https://on.cypress.io/interacting-with-elements

  it('Type in a search term', () => {
    // https://on.cypress.io/type
    cy
      .get('#nav-search')
      .type('not now')
      .should('have.value', 'not now');
  });

  it('Type / to focus in search box.', () => {
    // https://on.cypress.io/type
    cy.get('body').type('/');

    cy.focused().should('have.attr', 'id', 'nav-search');
  });

  // it('Should load search results', () => {
  //   cy
  //     .get('#nav-search')
  //     .type('not now')
  //     .trigger('mousedown', { which: 13 });

  //   cy.get('form').submit();

  //   cy.get('.search-results-loaded').should(
  //     'have.html',
  //     `
  //   <div class="single-article single-article-small-pic">iv class="small-pic">       <a href="/twitter_75" class="small-pic-link-wrapper">         <img src="/uploads/user/profile_image/75/8482d712-9712-46c7-97cf-7d9d81be14fc.jpeg" alt="twitter_75 profile">       </a>       </div>       <a href="/twitter_75/-if-not-now-when-4346-5f8i" class="small-pic-link-wrapper index-article-link" id="article-link-85">        <div class="content">         <h3><span class="tag-identifier" style="background:null;color:null">#discuss</span> If Not Now, When? 4346</h3>   </div>       </a>       <h4><a href="/twitter_75">Ms. Tressa Greenfelder・Apr 22</a></h4>       <div class="tags"><a href="/t/discuss"><span class="tag">#discuss</span></a>
  //   <a href="/t/meta"><span class="tag">#meta</span></a>
  //   <a href="/t/git"><span class="tag">#git</span></a>
  //   <a href="/t/changelog"><span class="tag">#changelog</span></a>
  //   </div><button class="article-engagement-count bookmark-engage" data-reactable-id="85">pan class="bm-success"><img src="/assets/readinglist-button.png" alt="bookmark"> SAVED</span>pan class="bm-initial">SAVE</span>        </button></div><div class="single-article single-article-small-pic">iv class="small-pic">       <a href="/twitter_44" class="small-pic-link-wrapper">         <img src="/uploads/user/profile_image/45/9ce28260-5760-41f2-a4df-b7192ed2fb1d.jpeg" alt="twitter_44 profile">       </a>       </div>       <a href="/twitter_44/-if-not-now-when-298-50gd" class="small-pic-link-wrapper index-article-link" id="article-link-124">        <div class="content">         <h3><span class="tag-identifier" style="background:null;color:null">#discuss</span> If Not Now, When? 298</h3>   </div>       </a>       <h4><a href="/twitter_44">Ardella Pagac・Apr 22</a></h4>       <div class="tags"><a href="/t/discuss"><span class="tag">#discuss</span></a>
  //   <a href="/t/meta"><span class="tag">#meta</span></a>
  //   <a href="/t/git"><span class="tag">#git</span></a>
  //   <a href="/t/changelog"><span class="tag">#changelog</span></a>
  //   </div><button class="article-engagement-count bookmark-engage" data-reactable-id="124">pan class="bm-success"><img src="/assets/readinglist-button.png" alt="bookmark"> SAVED</span>pan class="bm-initial">SAVE</span>        </button></div><div class="single-article single-article-small-pic">iv class="small-pic">       <a href="/buildingprogrammers" class="small-pic-link-wrapper">         <img src="/uploads/podcast/image/4/90bd17aa-ad5e-426a-bae1-037e45929d82.jpeg" alt="buildingprogrammers profile">       </a>       </div>       <a href="/buildingprogrammers/episode-6-episode-sechs--daniel-berkompas" class="small-pic-link-wrapper index-article-link" id="article-link-undefined">        <div class="content">         <h3><span class="tag-identifier">podcast</span>Episode 6: Episode Sechs — Daniel Berkompas</h3>   </div>       </a>       <h4><a href="/buildingprogrammers">Building Programmers</a></h4>       <div class="tags"></div></div><div class="single-article single-article-small-pic">iv class="small-pic">       <a href="/buildingprogrammers" class="small-pic-link-wrapper">         <img src="/uploads/podcast/image/4/bee9d910-0a86-403a-befd-4075d403c3f0.jpeg" alt="buildingprogrammers profile">       </a>       </div>       <a href="/buildingprogrammers/episode-6-episode-sechs--daniel-berkompas" class="small-pic-link-wrapper index-article-link" id="article-link-undefined">        <div class="content">         <h3><span class="tag-identifier">podcast</span>Episode 6: Episode Sechs — Daniel Berkompas</h3>   </div>       </a>       <h4><a href="/buildingprogrammers">Building Programmers</a></h4>       <div class="tags"></div></div>
  //   `,
  //   );
  // });
});
