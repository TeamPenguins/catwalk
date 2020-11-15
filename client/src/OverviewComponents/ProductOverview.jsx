import React, { Component } from 'react';

class ProductOverview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="col-8 navbar-brand" href="#">CATWALK</a>
            <form class="col-4 form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-8 my-5 gallery">
              <img class="rounded-sm" src="https://via.placeholder.com/620"/>
            </div>
            <div class="col-4 my-5 product-details">
              <div>
                <div class="my-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="my-1" >CATEGORY</div>
                <h1>Expanded Product Name</h1>
                <p>$369</p>
                <p>STYLE | SELECTED STYLE</p>
              </div>
              <div>
                <div class="row my-2">
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                </div>
                <div class="row my-2">
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                  <img class="rounded-circle px-1" src="https://via.placeholder.com/70"/>
                </div>
              </div>
              <form class="">
                <div class="row my-3">
                  <select class="col-6 mr-3 form-control">
                    <option>SELECT SIZE</option>
                  </select>
                  <select class="col-2 form-control">
                    <option>1</option>
                  </select>
                </div>
                <div class="row my-3">
                  <select class="col-8 mr-3 form-control">
                    <option>ADD TO BAG</option>
                  </select>
                  <button type="button" class="btn btn-secondary">
                    <i class="fas fa-star"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-8 border-right border-dark product-overview">
              <h3>Product Slogan, Pithy Description Or Catchphrase</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo diam, congue at venenatis et, cursus et elit. Duis lacinia neque et elit porta posuere. Nullam viverra eros sed tortor placerat, id ultrices tortor lacinia. Donec venenatis lectus eu bibendum gravida.</p>
              <p>Mauris ut arcu viverra, porttitor purus nec, eleifend erat. Praesent nibh massa, condimentum in libero posuere, finibus posuere lacus. Morbi ullamcorper tempus tellus, vitae auctor mi vestibulum feugiat.
              </p>
            </div>
            <div class="col-4 product-features-list">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0"><i class="fas fa-check pr-1"></i>GMO and pesticide free</li>
                <li class="list-group-item border-0"><i class="fas fa-check pr-1"></i>Made with 100% Genetic Modification</li>
                <li class="list-group-item border-0"><i class="fas fa-check pr-1"></i>This is made up</li>
                <li class="list-group-item border-0"><i class="fas fa-check pr-1"></i>It doesn't matter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ProductOverview;