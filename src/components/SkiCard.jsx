import React, { useEffect } from 'react';
import { TweenMax, Power4, Power3 } from "gsap";
import CherryBlossom from '../assets/parlor/CherryBlossom.png';
import RavenRising from '../assets//parlor/RavenRising.png';
import Samuri from '../assets/parlor/Samuri.png';
import SpaceBees from '../assets/parlor/SpaceBees.png';
import SpaceCowboy from '../assets/parlor/SpaceCowboy.png';
import StrangeHoliday from '../assets/parlor/StrangeHoliday.png';
import Sunrise from '../assets/parlor/Sunrise.png';
import Valhalla from '../assets/parlor/Valhalla.png';
import WesternSkies from '../assets/parlor/WesternSkies.png';


export default function SkiCard() {

    useEffect(() => {
        class VerticalMouseDrivenCarousel {
            constructor(options = {}) {
                const _defaults = {
                    carousel: ".js-carousel",
                    bgImg: ".js-carousel-bg-img",
                    list: ".js-carousel-list",
                    listItem: ".js-carousel-list-item"
                };

                this.posY = 0;

                this.defaults = Object.assign({}, _defaults, options);

                this.initCursor();
                this.init();
                this.bgImgController();
            }
        
            //region getters
            getBgImgs() {
                return document.querySelectorAll(this.defaults.bgImg);
            }
        
            getListItems() {
                return document.querySelectorAll(this.defaults.listItem);
            }
        
            getList() {
                return document.querySelector(this.defaults.list);
            }
        
            getCarousel() {
                return document.querySelector(this.defaults.carousel);
            }
        
            init() {
                TweenMax.set(this.getBgImgs(), {
                    autoAlpha: 0,
                    scale: 1.05
                });
        
                TweenMax.set(this.getBgImgs()[0], {
                    autoAlpha: 1,
                    scale: 1
                });
        
                this.listItems = this.getListItems().length - 1;
        
                this.listOpacityController(0);
            }
        
            initCursor() {
                const listHeight = this.getList().clientHeight;
                const carouselHeight = this.getCarousel().clientHeight;
        
                this.getCarousel().addEventListener(
                    "mousemove",
                    (event) => {
                        this.posY = event.pageY - this.getCarousel().offsetTop;
                        let offset = (-this.posY / carouselHeight) * listHeight;
        
                        TweenMax.to(this.getList(), 0.3, {
                            y: offset,
                            ease: Power4.easeOut
                        });
                    },
                    false
                );
            }
        
            bgImgController() {
                for (const link of this.getListItems()) {
                    link.addEventListener("mouseenter", (ev) => {
                        let currentId = ev.currentTarget.dataset.itemId;
        
                        this.listOpacityController(currentId);
        
                        TweenMax.to(ev.currentTarget, 0.3, {
                            autoAlpha: 1
                        });
        
                        TweenMax.to(".is-visible", 0.2, {
                            autoAlpha: 0,
                            scale: 1.05
                        });
        
                        if (!this.getBgImgs()[currentId].classList.contains("is-visible")) {
                            this.getBgImgs()[currentId].classList.add("is-visible");
                        }

                        if (!this.getList().classList.contains("is-visible")) {
                            this.getList().classList.add("is-visible");
                        }
        
                        TweenMax.to(this.getBgImgs()[currentId], 0.6, {
                            autoAlpha: 1,
                            scale: 1
                        });
                    });
                }
            }
        
            listOpacityController(id) {
                id = parseInt(id);
                let aboveCurrent = this.listItems - id;
                let belowCurrent = parseInt(id);
        
                if (aboveCurrent > 0) {
                    for (let i = 1; i <= aboveCurrent; i++) {
                        let opacity = 0.5 / i;
                        let offset = 5 * i;
                        TweenMax.to(this.getListItems()[id + i], 0.5, {
                            autoAlpha: opacity,
                            x: offset,
                            ease: Power3.easeOut
                        });
                    }
                }
        
                if (belowCurrent > 0) {
                    for (let i = 0; i <= belowCurrent; i++) {
                        let opacity = 0.5 / i;
                        let offset = 5 * i;
                        TweenMax.to(this.getListItems()[id - i], 0.5, {
                            autoAlpha: opacity,
                            x: offset,
                            ease: Power3.easeOut
                        });
                    }
                }
            }
        }
        
        new VerticalMouseDrivenCarousel();
    }, []);

    function skiDesigns() {
            return (
                <div className="ski-carousel">
                    <header className="c-header c-header--archive c-header--project-list">
                        <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
                            <ul className="c-mouse-vertical3-carousel__list js-carousel-list is-visible">
                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="0">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>01</span> Nevada</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Cherry Blossom</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="1">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>02</span> New Hampshire</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Raven Rising</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="2">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>03</span> New York</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Saumri</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="3">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>04</span> Oklahoma</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Space Bees</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="4">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>05</span> North Carolina</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Space Cowboy</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="5">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>06</span> Utah</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Strange Holiday</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="6">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>07</span> Missouri</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Sunrise</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="7">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>07</span> Missouri</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Valhalla</p>
                                    </a>
                                </li>

                                <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id="8">
                                    <a href="">
                                        <p className="c-mouse-vertical-carousel__eyebrow u-b4"><span>07</span> Missouri</p>
                                        <p className="c-mouse-vertical-carousel__title u-a5">Western Skies</p>
                                    </a>
                                </li>
                            </ul>

                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img">{CherryBlossom}</i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${RavenRising})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${Samuri})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${SpaceBees})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${SpaceCowboy})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${StrangeHoliday})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${Sunrise})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${Valhalla})` }}></i>
                            <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: `url(${WesternSkies})` }}></i>
                        </div>
                    </header>
                </div>
            );
        }
    
    return (
        <div>
            {skiDesigns()}
        </div>
    );
}