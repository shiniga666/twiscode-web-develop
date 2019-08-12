/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Listing = () => (
  <div className="single-post row">
    <div className="col-lg-3  col-md-3 meta-details">
      <ul className="tags">
        <li>
          <a href="#">Food,</a>
        </li>
        <li>
          <a href="#">Technology,</a>
        </li>
        <li>
          <a href="#">Politics,</a>
        </li>
        <li>
          <a href="#">Lifestyle</a>
        </li>
      </ul>
      <div className="user-details row">
        <p className="user-name col-lg-12 col-md-12 col-6">
          <a href="#">Mark wiens</a>
          <i className="ti-user" />
        </p>
        <p className="date col-lg-12 col-md-12 col-6">
          <a href="#">12 Dec, 2017</a>
          <i className="ti-calendar" />
        </p>
        <p className="view col-lg-12 col-md-12 col-6">
          <a href="#">1.2M Views</a>
          <i className="ti-eye" />
        </p>
        <p className="comments col-lg-12 col-md-12 col-6">
          <a href="#">06 Comments</a>
          <i className="ti-comment" />
        </p>
      </div>
    </div>
    <div className="col-lg-9 col-md-9 ">
      <div className="feature-img">
        <img
          className="img-fluid"
          src="/public/img/blog/feature-img1.jpg"
          alt=""
        />
      </div>
      <Link className="posts-title" to="/blog/detail">
        <h3>Astronomy Binoculars A Great Alternative</h3>
      </Link>
      <p className="excert">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction.
      </p>
      <a href="#" className="primary-btn" data-text="View More">
        <span>V</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
        <span />
        <span>M</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
      </a>
    </div>
  </div>
);

const BlogListing = () => (
  <section className="post-content-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 posts-list">
          <Listing />
          <Listing />
          <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="ti-angle-left" />
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  01
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  02
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  03
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  04
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  09
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">
                    <span className="ti-angle-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-4 sidebar-widgets">
          <div className="widget-wrap">
            <div className="single-sidebar-widget search-widget">
              <form className="search-form" action="#">
                <input
                  placeholder="Search Posts"
                  name="search"
                  type="text"
                  onFocus="this.placeholder = ''"
                  onBlur="this.placeholder = 'Search Posts'"
                />
                <button type="submit">
                  <i className="ti-search" />
                </button>
              </form>
            </div>
            <div className="single-sidebar-widget user-info-widget">
              <img src="/public/img/blog/user-info.png" alt="" />
              <a href="#">
                <h4>Charlie Barber</h4>
              </a>
              <p>Senior blog writer</p>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-github" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-dribbble" />
                  </a>
                </li>
              </ul>
              <p>
                Boot camps have its supporters andit sdetractors. Some people do
                not understand why you should have to spend money on boot camp
                when you can get. Boot camps have itssuppor ters andits
                detractors.
              </p>
            </div>
            <div className="single-sidebar-widget popular-post-widget">
              <h4 className="popular-title">Popular Posts</h4>
              <div className="popular-post-list">
                <div className="single-post-list d-flex flex-row align-items-center">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="/public/img/blog/pp1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <a href="#">
                      <h6>Space The Final Frontier</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="single-post-list d-flex flex-row align-items-center">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="/public/img/blog/pp2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <a href="#">
                      <h6>The Amazing Hubble</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="single-post-list d-flex flex-row align-items-center">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="/public/img/blog/pp3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <a href="#">
                      <h6>Astronomy Or Astrology</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div className="single-post-list d-flex flex-row align-items-center">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="/public/img/blog/pp4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <a href="#">
                      <h6>Asteroids telescope</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-sidebar-widget ads-widget">
              <a href="#">
                <img
                  className="img-fluid"
                  src="/public/img/blog/ads-banner.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="single-sidebar-widget post-category-widget">
              <h4 className="category-title">Post Catgories</h4>
              <ul className="cat-list">
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Technology</p>
                    <p>37</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Lifestyle</p>
                    <p>24</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Fashion</p>
                    <p>59</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Art</p>
                    <p>29</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Food</p>
                    <p>15</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Architecture</p>
                    <p>09</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Adventure</p>
                    <p>44</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-sidebar-widget newsletter-widget">
              <h4 className="newsletter-title">Newsletter</h4>
              <p>
                Here, I focus on a range of items and features that we use in
                life without giving them a second thought.
              </p>
              <div className="form-group d-flex flex-row">
                <div className="col-autos">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="ti-email" aria-hidden="true" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Enter email"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter email'"
                    />
                  </div>
                </div>
                <a href="#" className="bbtns">
                  Subcribe
                </a>
              </div>
              <p className="text-bottom">You can unsubscribe at any time</p>
            </div>
            <div className="single-sidebar-widget tag-cloud-widget">
              <h4 className="tagcloud-title">Tag Clouds</h4>
              <ul>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Architecture</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogListing;
