import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
const HomePage = () => {
    return (
        <>
        <div className="platform__wrapper" id="app">
            <div className="platform platform--home">
                <div>
                    {/* <a className="skip-to-div-content__link" href="#divcontent" tabindex="0">Skip to div Content</a> */}
                    <header className="global-nav-container">
                        <div>
                            <div className="global-nav__inputs--collapsed-dropdown">
                                <div className="global-nav__inputs--collapsed-dropdown__inner">
                                    <button aria-expanded="false" aria-label="Close Searchbars" className="button button--bare global-nav__close-search-icon">
                                        <div className="niche-icon-wrap">
                                            <svg className="niche-icon niche-icon--close" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 3.7l-6 6-6-6c-.6-.6-1.7-1.1-2.5-.2-.9.8-.4 1.9.2 2.5l6 6-6 6c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l6-6 6 6c.6.6 1.7 1.1 2.5.3.9-.9.4-1.9-.3-2.5l-6-6 6-6c.6-.6 1.1-1.7.3-2.5-.7-.9-1.8-.4-2.4.2z" xmlns="http://www.w3.org/2000/svg"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="global-nav__primary global-nav__primary--collapsed">
                                <div className="global-nav__primary-inner">
                                    <div className="global-nav__hamburger" role="button" tabindex="0" aria-expanded="false" aria-label="Open search bars and mega menu">
                                        <span className="global-nav__hamburger-line"></span>
                                    </div>
                                    <div className="global-nav__logo">
                                        <a title="Niche" href="https://www.niche.com/" data-after-sherlock="true" aria-label="Niche Home">
                                            <svg className="niche-logo-horizontal" viewBox="0 0 572 112" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M428 34.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 56.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 78.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM377 16.5c-22.6 0-41 18.2-41 40.8S354.4 98 377 98s41-18.2 41-40.8-18.4-40.7-41-40.7zm0 76.2c-19.4 0-35.1-15.9-35.1-35.4s15.7-35.4 35.1-35.4 35.1 15.9 35.1 35.4-15.7 35.4-35.1 35.4z" fill="#fff"></path>
                                                <path d="M83.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L35.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2z" fill="#fff" transform="matrix(.64 0 0 .65 340 20.8)" stroke="#fff" stroke-width="2"></path>
                                                <path d="M55.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L7.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2zM83.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM160.6 74.1c-.9 0-2.2.8-3.9 2-3.7 2.4-9.8 6.5-18.6 6.5-14.5 0-24.7-13.9-24.7-26.4 0-15.8 12.7-26.4 24.7-26.4 8.3 0 13.2 3.9 16.7 6.8 1.9 1.5 3.4 2.8 4.9 2.8 2.2 0 3.5-1.2 3.5-3.2 0-3.7-11.9-13.3-25-13.3-17.9 0-32.4 14.9-32.4 33.2 0 18.1 14.8 33.4 32.3 33.4 5.8 0 12.3-1.5 17.7-4.2 4.9-2.5 8-5.4 8-7.6 0-2.2-1.3-3.6-3.2-3.6zM187.8 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM237.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3z" fill="#fff"></path>
                                                <path fill="#fff" d="M187 52.5h50v7h-50z"></path>
                                                <path fill="#fff" d="M187 52.5h50v7h-50zm119.5 29H269v-22h31c3 0 4.3-1.7 4.3-3.5 0-1.6-1.2-3.4-4.4-3.4H269V31h37.5c3.1 0 4.2-1.8 4.2-3.6 0-1-.4-3.3-4.2-3.3h-41.1c-2.6 0-4.2 1.5-4.2 4.2v56.1c0 2.7 1.2 3.9 3.9 3.9h41.4c2.6 0 4.2-1.3 4.2-3.6.1-1.9-1.5-3.2-4.2-3.2z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="global-nav__primary--collapsed-inner">
                                        <div className="global-links-wrap global-links--primary">
                                            <nav aria-label="Banner Links" className="global-links">
                                                <ul className="global-links__list">
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/k12/search/best-schools/?geoip=true" role="button">K-12</a>
                                                    </li>
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/colleges/search/best-colleges/" role="button">Colleges</a>
                                                    </li>
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/graduate-schools/search/best-graduate-schools/" role="button">Graduate Schools</a>
                                                    </li>
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/colleges/scholarships/" role="button">Scholarships</a>
                                                    </li>
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/places-to-live/search/best-places-to-live/?geoip=true" role="button">Places to Live</a>
                                                    </li>
                                                    <li className="global-links__item">
                                                        <a href="https://www.niche.com/places-to-work/search/all-workplaces/?geoip=true" role="button">Places to Work</a>
                                                    </li>
                                                </ul>
                                                <button aria-expanded="false" className="button button--bare global-links__meatball-icon">
                                                    <div className="niche-icon-wrap">
                                                        <svg className="niche-icon niche-icon--meatball" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                            <g xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12" cy="13" r="2.5"></circle>
                                                                <circle cx="21.5" cy="13" r="2.5"></circle>
                                                                <circle cx="2.5" cy="13" r="2.5"></circle>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <span className="visually-hidden">Mega Menu</span>
                                                </button>
                                            </nav>
                                        </div>
                                        <div className="global-nav__search-icon-container">
                                            <button aria-expanded="false" className="button button--bare global-nav__search-icon">
                                                <div className="niche-icon-wrap">
                                                    <svg aria-hidden="true" className="niche-icon niche-icon--search" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="search_collapsedNavigation">
                                                            <path d="M13.5 2C8.8 2 5 5.8 5 10.5c0 1.8.5 3.4 1.5 4.8L2.7 19c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l3.7-3.7c1.4.9 3 1.5 4.8 1.5 4.7 0 8.5-3.8 8.5-8.5C22 5.8 18.2 2 13.5 2zm0 14.4c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <span className="visually-hidden">Open Searchbars</span>
                                            </button>
                                            <div className="global-nav__divider"></div>
                                        </div>
                                    </div>
                                    <nav aria-label="Search by name and location" className="global-nav__inputs">
                                        <div aria-busy="false" className="global-nav__inputs-wrap">
                                            <div className="global-nav__inputs__sliding-backdrop"></div>
                                            <div className="sherlock__container--global-nav sherlock__container--entity-input">
                                                <div className="sherlock__input-wrap">
                                                    <div className="sherlock__input-entity-selection">
                                                        <input type="text" aria-autocomplete="list" aria-describedby="sherlock__input-help-- sherlock__alerts--" aria-haspopup="listbox" aria-labelledby="global-nav-entity-sherlock-label" autocapitalize="off" autocomplete="nope" autocorrect="off" className="sherlock__input" data-lpignore="true" data-testid="sherlock__input--entityInput" disabled="" id="sherlock__input--" maxlength="144" placeholder="a college or university ..." spellcheck="false" value=""/>
                                                        <div className="sherlock__overflow-gradient"></div>
                                                        <div className="niche-icon-wrap">
                                                            <svg aria-hidden="true" className="niche-icon niche-icon--search" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="search_">
                                                                    <path d="M13.5 2C8.8 2 5 5.8 5 10.5c0 1.8.5 3.4 1.5 4.8L2.7 19c-.6.6-1.1 1.7-.3 2.5.9.9 1.9.4 2.5-.3l3.7-3.7c1.4.9 3 1.5 4.8 1.5 4.7 0 8.5-3.8 8.5-8.5C22 5.8 18.2 2 13.5 2zm0 14.4c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="visually-hidden" id="sherlock__input-help--">Provides auto-suggestions when entering text</div>
                                                <span className="visually-hidden" id="global-nav-entity-sherlock-label">Find a college or university ...</span>
                                            </div>
                                            <div className="sherlock__container--global-nav sherlock__container--location-input">
                                                <div className="sherlock__input-wrap">
                                                    <div className="sherlock__input-entity-selection">
                                                        <input type="text" aria-autocomplete="list" aria-describedby="sherlock__input-help-- sherlock__alerts--" aria-haspopup="listbox" aria-labelledby="global-nav-location-sherlock-label" autocapitalize="off" autocomplete="nope" autocorrect="off" className="sherlock__input sherlock__input--location-name-placeholder" data-lpignore="true" data-testid="sherlock__input--locationInput" disabled="" id="sherlock__input--" maxlength="144" placeholder="America" spellcheck="false" value=""/>
                                                        <div className="sherlock__overflow-gradient"></div>
                                                        <div className="niche-icon-wrap">
                                                            <svg className="niche-icon niche-icon--location-line" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <g xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12,0.5c-4.8,0-8.6,4.1-8.6,9.1c0,6.4,6.4,12.7,6.7,13l0,0c0.7,0.6,1.3,0.9,1.9,0.9c0.6,0,1.3-0.3,1.9-0.9   c0.3-0.3,6.7-6.6,6.7-13C20.6,4.6,16.8,0.5,12,0.5z M12.3,20.9c-0.2,0.2-0.3,0.3-0.4,0.3c-0.1,0-0.2-0.1-0.4-0.3   c-0.2-0.2-6-6-6-11.3c0-3.7,2.9-6.8,6.4-6.8c3.5,0,6.4,3,6.4,6.8C18.4,15,12.4,20.8,12.3,20.9z"></path>
                                                                    <path d="M12,4.8c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5S14.5,4.8,12,4.8z M12,11.5   c-1.2,0-2.2-1-2.2-2.2S10.8,7,12,7c1.2,0,2.2,1,2.2,2.2S13.2,11.5,12,11.5z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="visually-hidden" id="sherlock__input-help--">Provides auto-suggestions when entering text</div>
                                                <span className="visually-hidden" id="global-nav-location-sherlock-label">Search in a state or metro ...</span>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="global-nav__account" data-testid="global-account-nav">
                                        <button aria-expanded="false" aria-haspopup="menu" aria-label="account navigation with 0 notifications" className="global-account-panel-toggle" data-after-sherlock="true" data-logged-in="false" id="global-account-panel-toggle">
                                            <div className="global-nav__account__logged-in">
                                                <span className="global-nav__account-icon">
                                                    <div className="niche-icon-wrap">
                                                        <svg className="niche-icon niche-icon--account" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M6.9,18.1c0.6-1.8,1.7-2.9,3-2.7h0.4   c0.6,0,0.8-0.2,0.8-0.4c0.1-0.3-0.1-0.8-0.4-1.1c-0.8-0.8-1.3-1.8-1.3-3c0-1.6,1.1-2.7,2.6-2.7s2.6,1.2,2.6,2.7   c0,0.9-0.2,2.2-1.3,3C13,14.3,12.8,14.7,13,15c0.1,0.2,0.3,0.4,0.9,0.4h0.4c1.3-0.2,2.4,0.8,3,2.6c-1.5,1.3-3.3,2-5.3,2   C10.1,20,8.3,19.3,6.9,18.1z M18.7,16.4c-0.6-1.2-1.6-1.9-2.8-2.3c0.6-0.9,0.8-2,0.8-3.1c0-2.8-2-4.8-4.7-4.8s-4.7,2-4.7,4.8   c0,1.1,0.3,2.2,0.8,3.1C7,14.5,6,15.3,5.4,16.5C4.5,15.2,4,13.7,4,12c0-4.4,3.6-8,8-8s8,3.6,8,8C20,13.6,19.5,15.1,18.7,16.4z" id="account_thick" xmlns="http://www.w3.org/2000/svg"></path>
                                                            <title>profile icon</title>
                                                        </svg>
                                                        <img alt="Gravatar Icon" className="niche-icon-wrap gravatar-icon" src="https://www.gravatar.com/avatar/0?s=undefined&amp;d=blank"/>
                                                    </div>
                                                </span>
                                                <span className="global-nav__account-username">
                                                    <span className="global-nav__account-name"></span>
                                                    <div className="niche-icon-wrap">
                                                        <svg className="niche-icon niche-icon--arrow-down" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-testid="icon-arrow-down">
                                                            <path d="M19.6 9.4c-.7-.7-1.6-.3-2.1.2L12 15.2 6.5 9.7c-.5-.5-1.4-1-2.1-.3-.7.7-.3 1.6.2 2.1l7.4 7.4 7.4-7.4c.5-.5.9-1.3.2-2.1z" xmlns="http://www.w3.org/2000/svg"></path>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </button>
                                        <div className="global-nav__account__logged-out">
                                            <button className="button button-small button-darker global-nav__account-login" data-after-sherlock="true">Log In</button>
                                            <button className="button button-small button-darker global-nav__account-signup">Sign &nbsp;Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <nav className="mega-menu-hidden">
                                <ul className="mega-menu__list mega-menu__list--expanded">
                                    <div className="mega-menu__category-label">
                                        <a aria-expanded="true" className="mega-menu-category-label__link" href="https://www.niche.com/k12/search/best-schools/?geoip=true">K-12 SCHOOLS</a>
                                        <div className="mega-menu__category-label__arrow">
                                            <svg className="niche-icon niche-icon--arrow-up" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-testid="icon-arrow-up">
                                                <path xmlns="http://www.w3.org/2000/svg" id="arrow_up_K-12 SCHOOLS" className="st0" d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/survey/">Review Your School</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/schools-near-you/">Schools Near You</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/compare/">Compare Schools</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/about/k12-quiz/">K-12 Quiz</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/search/best-schools/?geoip=true">School Search</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/search/best-school-districts/?geoip=true">District Search</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/k12/rankings/">School Rankings</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/blog/topics/parent-resources/?ref=megamenu">Parent Resources</a>
                                    </li>
                                </ul>
                                <ul className="mega-menu__list mega-menu__list--expanded">
                                    <div className="mega-menu__category-label">
                                        <a aria-expanded="true" className="mega-menu-category-label__link" href="https://www.niche.com/colleges/search/best-colleges/">COLLEGES</a>
                                        <div className="mega-menu__category-label__arrow">
                                            <svg className="niche-icon niche-icon--arrow-up" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-testid="icon-arrow-up">
                                                <path xmlns="http://www.w3.org/2000/svg" id="arrow_up_COLLEGES" className="st0" d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/about/direct-admissions/">Direct Admissions</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/survey/">Review Your College</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/college-quiz/">College Quiz</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/admissions-calculator/">Admissions Calculator</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/compare/">Compare Colleges</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/scholarships/">Scholarships</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/scholarships/no-essay-scholarship/">$2,000 No Essay Scholarship</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/search/best-colleges/">College Search</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/rankings/">College Rankings</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/about/find-private-student-loans/">Student Loans</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/colleges/topic/hub/majors/">Guide to College Majors</a>
                                    </li>
                                </ul>
                                <ul className="mega-menu__list mega-menu__list--expanded">
                                    <div className="mega-menu__category-label">
                                        <a aria-expanded="true" className="mega-menu-category-label__link" href="https://www.niche.com/graduate-schools/search/best-graduate-schools/">GRADUATE SCHOOLS</a>
                                        <div className="mega-menu__category-label__arrow">
                                            <svg className="niche-icon niche-icon--arrow-up" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-testid="icon-arrow-up">
                                                <path xmlns="http://www.w3.org/2000/svg" id="arrow_up_GRADUATE SCHOOLS" className="st0" d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/graduate-schools/survey/">Review Your Grad School</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/graduate-schools/survey/graduate-school-survey-scholarship/">$1,000 Graduate Survey Scholarship</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/graduate-schools/search/best-graduate-schools/">Grad School Search</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/graduate-schools/programs/">Graduate Programs</a>
                                    </li>
                                </ul>
                                <ul className="mega-menu__list mega-menu__list--expanded">
                                    <div className="mega-menu__category-label">
                                        <a aria-expanded="true" className="mega-menu-category-label__link" href="https://www.niche.com/places-to-live/search/best-places-to-live/?geoip=true">PLACES TO LIVE</a>
                                        <div className="mega-menu__category-label__arrow">
                                            <svg className="niche-icon niche-icon--arrow-up" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-testid="icon-arrow-up">
                                                <path xmlns="http://www.w3.org/2000/svg" id="arrow_up_PLACES TO LIVE" className="st0" d="M4.4 18.6c.7.7 1.6.3 2.1-.2l5.5-5.5 5.5 5.5c.5.5 1.4.9 2.1.2.7-.7.3-1.6-.2-2.1L12 9.1l-7.4 7.4c-.5.5-.9 1.3-.2 2.1z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/places-to-live/survey/">Review Your Area</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/places-to-live/search/best-places-to-live/?geoip=true">Find Places to Live</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/places-to-live/rankings/">Rankings</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/places-to-work/survey/">Review Your Company</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/places-to-work/search/all-workplaces/?geoip=true">Find Places to Work</a>
                                    </li>
                                    <li className="mega-menu__item">
                                        <a href="https://www.niche.com/blog/topics/home-buying-tips/?ref=megamenu">Home Buying Tips</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <div aria-label="Notifications"></div>
                    <div className="content" id="divcontent">
                        <noscript>
                            <div className="noscript">
                                <span>
                                    Niche requires Javascript to work correctly. Please <a target="_blank" href="http://www.enable-javascript.com/">turn it on</a>
                                    if you're experiencing issues.
                                </span>
                            </div>
                        </noscript>
                        <div className="home-overview-wrap">
                            <div className="home-hero">
                                <picture className="home-hero__photo home-hero__photo-v2">
                                    <source srcset="https://assets.niche.com/static/home/hero-lg.webp" type="image/webp" media="(min-width: 768px)"/>
                                    <source srcset="https://assets.niche.com/static/home/hero.webp" type="image/webp"/>
                                    <source srcset="https://assets.niche.com/static/home/hero-lg.jpg" type="image/jpeg" media="(min-width: 768px)"/>
                                    <source srcset="https://assets.niche.com/static/home/hero.jpg" type="image/jpeg"/>
                                    <img src="https://assets.niche.com/static/home/hero.jpg" alt="Students laughing around tablet"/>
                                    <div className="noise-filter"></div>
                                </picture>
                                <div className="home-hero__content-container">
                                    <h1 className="home-hero__header">
                                        <div className="type--weight-600 home-hero__header__kicker">Find the School</div>
                                        <div className="type--weight-700 home-hero__header__title">That Fits You Best</div>
                                    </h1>
                                    <div className="home-squiggle ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                        </svg>
                                    </div>
                                    <div className="type--weight-400 home-body home-body--hero">Finding the right school shouldn’t be hard. From K‑12 to college to grad school, we make it easy to discover and connect with the best ones for you.</div>
                                    <div className="home-hero__cta-wrap">
                                        <div className="type--weight-600 home-hero__cta-title">Start Your Search</div>
                                        <ul className="home-hero__ctas">
                                            <li className="home-hero__cta">
                                                <a href="https://www.niche.com/k12/search/best-schools/?geoip=true" className="button home-button--green home-hero__cta-link" tabindex="0">K-12 Schools</a>
                                            </li>
                                            <li className="home-hero__cta">
                                                <a href="https://www.niche.com/colleges/search/best-colleges/" className="button home-button--green home-hero__cta-link" tabindex="0">Colleges</a>
                                            </li>
                                            <li className="home-hero__cta">
                                                <a href="https://www.niche.com/graduate-schools/search/best-graduate-schools/" className="button home-button--green home-hero__cta-link" tabindex="0">Grad Schools</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="home-direct-admissions">
                                <div className="home-wavy-edge ">
                                    <div className="home-wavy-edge__inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                                            <path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="home-direct-admissions__div-wrapper">
                                    <div className="home-direct-admissions__about-div home-direct-admissions__about-div--details">
                                        <picture className="direct-admissions-logo">
                                            <source srcset="https://assets.niche.com/static/direct-admissions-logo.webp" type="image/webp"/>
                                            <source srcset="https://assets.niche.com/static/direct-admissions-logo.png" type="image/png"/>
                                            <img loading="lazy" src="https://assets.niche.com/static/direct-admissions-logo.png" alt="Niche Direct Admissions logo"/>
                                        </picture>
                                        <picture className="home-direct-admissions__photo--mobile">
                                            <source srcset="https://assets.niche.com/static/home/home-da.webp" type="image/webp"/>
                                            <source srcset="https://assets.niche.com/static/home/home-da.png" type="image/png"/>
                                            <img loading="lazy" src="https://assets.niche.com/static/home/home-da.png" alt="Students laughing around tablet"/>
                                        </picture>
                                        <p className="home-direct-admissions__header type--weight-700 home-header home-header__title">Get accepted without an application.</p>
                                        <p className="home-direct-admissions__body type--weight-400 home-body">No application. No waiting.</p>
                                        <p className="type--weight-400 home-body">With Direct Admissions, colleges can accept you based on the information in your Niche Profile.</p>
                                        <div className="home-direct-admissions__button-wrapper">
                                            <button className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButtonBase-root home-direct-admissions__signup-button nss-1iyt9x3" tabindex="0" type="button">Create a Niche Profile</button>
                                            <a className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-disableElevation MuiButtonBase-root nss-13hbwbq" tabindex="0" href="/about/direct-admissions">Learn more</a>
                                        </div>
                                    </div>
                                    <div className="home-direct-admissions__about-div home-direct-admissions__about-div--image">
                                        <picture className="home-direct-admissions__photo--desktop">
                                            <source srcset="https://assets.niche.com/static/home/home-da.webp" type="image/webp"/>
                                            <source srcset="https://assets.niche.com/static/home/home-da.png" type="image/png"/>
                                            <img src="https://assets.niche.com/static/home/home-da.png" alt="Students laughing around tablet"/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div className="home-why-niche">
                                <h2 className="home-header home-header--why">
                                    <div className="type--weight-600 home-header__kicker">Find Your Niche</div>
                                </h2>
                                <p className="type--weight-700 home-header home-header--why home-header__title">
                                    Your search is unique.<br/>Just &nbsp;like &nbsp;you.
                                </p>
                                <div className="home-squiggle ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                        <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                    </svg>
                                </div>
                                <div className="type--weight-400 home-body home-body--why">We give you all of the data, reviews, and insights in one place to make your search as easy as possible.</div>
                                <ul className="home-why-reasons">
                                    <li className="home-why-reason">
                                        <figure className="home-why-reason__illustration">
                                            <img loading="lazy" src="https://assets.niche.com/static/home/why-icon-1.svg" alt=""/>
                                        </figure>
                                        <h3 className="type--weight-800 home-why-reason__title">No Heavy Lifting</h3>
                                        <div className="type--weight-400 home-body home-why-reason__body">We analyze the data so you don't have to.</div>
                                    </li>
                                    <li className="home-why-reason">
                                        <figure className="home-why-reason__illustration">
                                            <img loading="lazy" src="https://assets.niche.com/static/home/why-icon-2.svg" alt=""/>
                                        </figure>
                                        <h3 className="type--weight-800 home-why-reason__title">The Good, The Bad, &amp;&nbsp;The &nbsp;Honest</h3>
                                        <div className="type--weight-400 home-body home-why-reason__body">Our user reviews let you hear directly from families and students to give you an honest and holistic view.</div>
                                    </li>
                                    <li className="home-why-reason">
                                        <figure className="home-why-reason__illustration">
                                            <img loading="lazy" src="https://assets.niche.com/static/home/why-icon-3.svg" alt=""/>
                                        </figure>
                                        <h3 className="type--weight-800 home-why-reason__title">Like A Glove</h3>
                                        <div className="type--weight-400 home-body home-why-reason__body">We personalize your search based on what's most important to you.</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-testimonial" id="testimonialCarousel">
                                <div className="home-background-squiggle ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 3578.12">
                                        <path d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path>
                                    </svg>
                                </div>
                                <h2 className="home-header home-header--testimonial">
                                    <div className="home-testimonial__kicker">Real Niche Stories</div>
                                </h2>
                                <p className="home-testimonial__title">Niche has helped millions of students and families find their &nbsp;fit.</p>
                                <div className="home-testimonial__carousel home-testimonial__carousel--animatable home-testimonial__carousel--make-slides">
                                    <div aria-hidden="false" className="carousel-dots">
                                        <button aria-current="true" aria-label="Go to slide 1" className="carousel-dot carousel-dot--active"></button>
                                        <button aria-current="false" aria-label="Go to slide 2" className="carousel-dot"></button>
                                        <button aria-current="false" aria-label="Go to slide 3" className="carousel-dot"></button>
                                    </div>
                                    <ul className="home-testimonial__slides" id="carouselSlides">
                                        <li aria-hidden="false" className="home-testimonial__slide home-testimonial__slide--debut">
                                            <div className="home-testimonial__canvas ">
                                                <div className="home-testimonial__pic-1" id="testimonialAnimation">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/abby-1.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/abby-1.jpg" type="image/jpeg"/>
                                                        <img alt="Abby smiling at the camera" loading="lazy" src="https://assets.niche.com/static/home/abby-1.jpg"/>
                                                    </picture>
                                                </div>
                                                <div className="home-testimonial__pic-2">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/abby-2.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/abby-2.jpg" type="image/jpeg"/>
                                                        <img alt="Abby standing under an outdoor arch and smiling at the camera" loading="lazy" src="https://assets.niche.com/static/home/abby-2.jpg"/>
                                                    </picture>
                                                </div>
                                                <div aria-hidden="true" className="home-testimonial__swoosh--abby"></div>
                                                <div aria-hidden="true" className="home-testimonial__stamp">
                                                    <img alt="I Found My Niche" loading="lazy" src="https://assets.niche.com/static/home/stamp-found.svg"/>
                                                </div>
                                            </div>
                                            <div className="home-testimonial__quote home-testimonial__quote--abby home-testimonial__quote--debut">During my college search, I was having a difficult time narrowing down what I wanted in a school, so I used Niche to help. I especially liked looking at the rankings for different aspects of the college experience, like the campus, academics, and much more!</div>
                                            <div className="home-testimonial__quoter home-testimonial__quoter--debut">Abby D.</div>
                                        </li>
                                        <li aria-hidden="true" className="home-testimonial__slide">
                                            <div className="home-testimonial__canvas ">
                                                <div className="home-testimonial__pic-1" id="testimonialAnimation">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/dayna-1.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/dayna-1.jpg" type="image/jpeg"/>
                                                        <img alt="Dayna reading a book with her child" loading="lazy" src="https://assets.niche.com/static/home/dayna-1.jpg"/>
                                                    </picture>
                                                </div>
                                                <div className="home-testimonial__pic-2">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/dayna-2.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/dayna-2.jpg" type="image/jpeg"/>
                                                        <img alt="Dayna’s son posing in a green elementary graduation outfit" loading="lazy" src="https://assets.niche.com/static/home/dayna-2.jpg"/>
                                                    </picture>
                                                </div>
                                                <div aria-hidden="true" className="home-testimonial__swoosh--dayna"></div>
                                                <div aria-hidden="true" className="home-testimonial__stamp home-testimonial__stamp--dayna">
                                                    <img alt="I Found Our Best-Fit School On Niche" loading="lazy" src="https://assets.niche.com/static/home/stamp-dayna.svg"/>
                                                </div>
                                            </div>
                                            <div className="home-testimonial__quote home-testimonial__quote--dayna">I am so grateful for Niche and their resources. Schooling children at home has truly had its challenges. But having resources has made it so much easier. Finding the right programs for my little ones has been invaluable.</div>
                                            <div className="home-testimonial__quoter">Dayna M.</div>
                                        </li>
                                        <li aria-hidden="true" className="home-testimonial__slide">
                                            <div className="home-testimonial__canvas ">
                                                <div className="home-testimonial__pic-1" id="testimonialAnimation">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/clay-1.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/clay-1.jpg" type="image/jpeg"/>
                                                        <img alt="Clay smiling at the camera while leaning on a bridge railing" loading="lazy" src="https://assets.niche.com/static/home/clay-1.jpg"/>
                                                    </picture>
                                                </div>
                                                <div className="home-testimonial__pic-2">
                                                    <picture>
                                                        <source srcset="https://assets.niche.com/static/home/clay-2.webp" type="image/webp"/>
                                                        <source srcset="https://assets.niche.com/static/home/clay-2.jpg" type="image/jpeg"/>
                                                        <img alt="Clay sitting and enjoying the sunlight on a campus lawn" loading="lazy" src="https://assets.niche.com/static/home/clay-2.jpg"/>
                                                    </picture>
                                                </div>
                                                <div aria-hidden="true" className="home-testimonial__swoosh--clay"></div>
                                                <div aria-hidden="true" className="home-testimonial__stamp">
                                                    <img alt="I Found My Best-Fit School On Niche" loading="lazy" src="https://assets.niche.com/static/home/stamp-clay.svg"/>
                                                </div>
                                            </div>
                                            <div className="home-testimonial__quote home-testimonial__quote--clay">When I was applying to college, I had no idea what I was looking for. Niche helped me explore different schools and see breakdowns on many aspects of their programs! Thanks to Niche, I found a school that was a perfect fit!</div>
                                            <div className="home-testimonial__quoter">Clay N.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="home-features">
                                <div className="home-background-squiggle home-background-squiggle--green">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 3578.12">
                                        <path d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path>
                                    </svg>
                                </div>
                                <div className="home-features__copy-container">
                                    <h2 className="home-header home-header--features">
                                        <div className="type--weight-600 home-header__kicker">Stay On Track</div>
                                    </h2>
                                    <p className="type--weight-700 home-header home-header--features home-header__title">Tools to organize &nbsp;your school &nbsp;search.</p>
                                    <div className="home-squiggle home-squiggle--features">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                        </svg>
                                    </div>
                                    <div className="type--weight-400 home-body home-body--features">We'll help you build your list, track your progress and get new recommendations as your search narrows.</div>
                                    <div className="home-features__cta-wrap">
                                        <a className="type--weight-600 home-features__cta" href="https://www.niche.com/colleges/search/best-colleges/" tabindex="0">Start Exploring</a>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="home-features__animation-wrap">
                                    <div aria-label="Animation, Search and manage schools; Click to pause" className="home-features__animation" id="featuresAnimation" role="button" tabindex="0"></div>
                                </div>
                            </div>
                            <div className="home-compare">
                                <div className="home-compare__stamp">
                                    <img alt="" loading="lazy" src="https://assets.niche.com/static/home/stamp-everything.svg"/>
                                </div>
                                <div className="home-compare__copy-container">
                                    <h2 className="home-header home-header--compare">
                                        <div className="type--weight-600 home-header__kicker">Choose Your School</div>
                                    </h2>
                                    <p className="type--weight-700 home-header home-header--compare home-header__title">Everything you need to make your &nbsp;decision.</p>
                                    <div className="home-squiggle home-squiggle--compare">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                        </svg>
                                    </div>
                                    <div className="type--weight-400 home-body home-body--compare">With the information you care about on every school in America, we make it easy for you to compare schools and colleges to make your decision.</div>
                                    <ul className="home-compare__links">
                                        <li className="home-compare__link">
                                            <a href="https://www.niche.com/k12/compare/" tabindex="0">Compare K-12 Schools</a>
                                        </li>
                                        <li className="home-compare__link">
                                            <a href="https://www.niche.com/colleges/compare/" tabindex="0">Compare Colleges</a>
                                        </li>
                                    </ul>
                                </div>
                                <div aria-hidden="true" className="home-compare__animation-wrap">
                                    <div aria-label="Animation, Compare schools easily; Click to pause" className="home-compare__animation" id="compareAnimation" role="button" tabindex="0"></div>
                                </div>
                            </div>
                            <div className="home-rankings">
                                <div className="home-wavy-edge home-wavy-edge--rankings">
                                    <div className="home-wavy-edge__inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                                            <path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="home-header home-header--rankings">
                                    <div className="type--weight-600 home-header__kicker">2024 Rankings</div>
                                </h2>
                                <p className="type--weight-700 home-header home-header--rankings home-header__title">Browse schools &amp;colleges by “best &nbsp;of”&nbsp;lists.</p>
                                <div className="home-squiggle home-squiggle--rankings">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                        <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                    </svg>
                                </div>
                                <div className="type--weight-400 home-body home-body--rankings">We combine the reviews and the data to put together these comprehensive lists to get you started.</div>
                                <ul className="home-rankings__ranks">
                                    <li className="home-rankings__rank">
                                        <a href="https://www.niche.com/colleges/rankings/" className="home-rankings__rank__link" tabindex="0">
                                            <figure className="home-rankings__rank__badge">
                                                <div className="rankings-badge" data-size="large" data-theme="salt" data-vertical="colleges" data-testid="rankings-badge"></div>
                                            </figure>
                                            <span className="type--weight-600 home-rankings__rank__cta">View Best Colleges</span>
                                        </a>
                                    </li>
                                    <li className="home-rankings__rank">
                                        <a href="https://www.niche.com/k12/rankings/" className="home-rankings__rank__link" tabindex="0">
                                            <figure className="home-rankings__rank__badge">
                                                <div className="rankings-badge" data-size="large" data-theme="salt" data-vertical="k12" data-testid="rankings-badge"></div>
                                            </figure>
                                            <span className="type--weight-600 home-rankings__rank__cta">View Best K-12 Schools</span>
                                        </a>
                                    </li>
                                    <li className="home-rankings__rank">
                                        <a href="https://www.niche.com/k12/search/best-school-districts/" className="home-rankings__rank__link" tabindex="0">
                                            <figure className="home-rankings__rank__badge">
                                                <div className="rankings-badge" data-size="large" data-theme="salt" data-vertical="k12" data-testid="rankings-badge"></div>
                                            </figure>
                                            <span className="type--weight-600 home-rankings__rank__cta">View Best Districts</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-started">
                                <div className="home-wavy-edge home-wavy-edge--start">
                                    <div className="home-wavy-edge__inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45">
                                            <path d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="home-start__illustration">
                                    <picture>
                                        <source srcset="https://assets.niche.com/static/home/start-student-with-dog.webp" type="image/webp"/>
                                        <source srcset="https://assets.niche.com/static/home/start-student-with-dog.png" type="image/png"/>
                                        <img loading="lazy" src="https://assets.niche.com/static/home/start-student-with-dog.png" alt="Illustration of a student and dog looking to the future"/>
                                    </picture>
                                </div>
                                <div className="home-start__content-container">
                                    <h2 className="home-header home-header--start">
                                        <div className="type--weight-700 home-header__title">Not sure where to start?</div>
                                    </h2>
                                    <div className="home-squiggle home-squiggle--start">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="none">
                                            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
                                        </svg>
                                    </div>
                                    <div className="type--weight-400 home-body home-body--start">Tell us what  matters most to you and we'll create a custom list of schools tailored to fit your needs.</div>
                                    <ul className="home-start__ctas">
                                        <li className="home-start__cta">
                                            <a href="https://www.niche.com/colleges/college-quiz/" className="button home-button--green home-start__button-block" tabindex="0">Take our College Quiz</a>
                                        </li>
                                        <li className="home-start__cta">
                                            <a href="https://www.niche.com/k12/schools-near-you/" className="button home-button--green home-start__button-block" tabindex="0">Find K-12 Schools Near You</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer role="contentinfo" aria-label="Footer" className="footer">
                        <div className="footer__container">
                            <div className="footer-static-nav-container">
                                <a alt="Niche" className="footer-logo" href="https://www.niche.com/">Niche</a>
                                <ul className="footer-social-buttons">
                                    <li>
                                        <a className="footer-social-button footer-social-button--instagram" href="https://www.instagram.com/nichesocial/" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">Instagram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer-social-button footer-social-button--facebook" href="https://www.facebook.com/nichesocial" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer-social-button footer-social-button--twitter" href="https://twitter.com/nichesocial" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer-social-button footer-social-button--tiktok" href="https://www.tiktok.com/@nichesocial" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">Tiktok</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer-social-button footer-social-button--discord" href="https://discord.com/invite/PKK7be6Mtd" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">Discord</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="footer-social-button footer-social-button--youtube" href="https://www.youtube.com/c/Nichesocial/featured" rel="noreferrer" target="_blank">
                                            <span className="visually-hidden">YouTube</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="footer-copyright">©
                                
                                Niche.com Inc.</div>
                            </div>
                        
                        </div>
                    </footer>
                </div>
                <div>
                    <div aria-label="Notifications"></div>
                </div>
            </div>
        </div>
    </>
    );
};

export default HomePage;
