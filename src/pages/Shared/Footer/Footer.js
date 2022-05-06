import React from 'react';
import './Footer.css';
import facebook from '../../../Images/logo/facebook-logopng.png';
import twitter from '../../../Images/logo/twitterpng.png';
import instagram from '../../../Images/logo/instagrampng.png';
import linkdin from '../../../Images/logo/linkdinpng.png';
import github from '../../../Images/logo/github.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailBulk, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className='position-relative bottom-0 end-0 w-100 footer rounded'>
            <footer className='w-full'>

                {/* Social media */}

                <section className='d-flex justify-content-between social-network px-5 align-items-center'>
                    <div><h6>Get connected with us on social media: </h6></div>
                    <div>
                        <a href="https://facebook.com/utsaho.utsho" target='_blank' rel='noreferrer'><img src={facebook} alt="" /></a>

                        <a href="https://twitter.com/utsaho_utsho" target='_blank' rel='noreferrer'><img className='mx-3' src={twitter} alt="" /></a>

                        <a href="https://instagram.com/utsaho_utsho" target='_blank' rel='noreferrer'><img src={instagram} alt="" /></a>

                        <a href="https://www.linkedin.com/in/pipul-boddyo-76755a206" target='_blank' rel='noreferrer'><img className='mx-4' src={linkdin} alt="" /></a>

                        <a href="https:github.com/utsaho" target='_blank' rel='noreferrer'><img src={github} alt="" /></a>
                    </div>
                </section>

                {/* Useful links for shortcut and contact */}
                <section className='footer-links pt-4'>
                    {/* Using grid for better performance */}
                    <div className='text-white container text-center text-md-start row'>
                        {/* Grid columns */}
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-6 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold'>company</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <h2 className='text-warning'>FavBook.com</h2>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-6 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold'>products</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <div className='d-flex flex-column'>
                                <Link className='text-white text-decoration-none' to='/'>hello</Link>
                                <Link className='text-white text-decoration-none' to='/'>bello</Link>
                                <Link className='text-white text-decoration-none' to='/'>mello</Link>
                                <Link className='text-white text-decoration-none' to='/'>kello</Link>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-6 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold'>useful links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <div className='d-flex flex-column'>
                                <Link className='text-white text-decoration-none' to='/'>hello</Link>
                                <Link className='text-white text-decoration-none' to='/'>bello</Link>
                                <Link className='text-white text-decoration-none' to='/'>mello</Link>
                                <Link className='text-white text-decoration-none' to='/'>kello</Link>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className='col-md-3 col-lg-3 col-xl-3 col-sm-6 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold'>contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <div className='d-flex flex-column'>
                                <p> <FontAwesomeIcon icon={faHome} /> <span className='mx-1'>Sylhet, Bangladesh</span> </p>
                                <p> <FontAwesomeIcon icon={faMailBulk} /> <span className='mx-1'>pipul.boddyo@gmail.com</span> </p>
                                <p> <FontAwesomeIcon icon={faPhone} /> <span className='mx-1'>+880 1304-245-824</span> </p>
                                <p> <FontAwesomeIcon icon={faFax} /> <span className='mx-1'>+880 1893-533-983</span> </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="copyright d-flex justify-content-center align-items-center text-light pt-3">
                    <p className='text-center'> <small>&copy;</small> {new Date().getFullYear()} all rights reserved: favBook.com</p>
                </div>
            </footer>
            {/* <footer
                class="text-center text-lg-start text-white"
                style="background-color: #1c2331"
            >
                
                <!-- Section: Links  -->
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <!-- Grid row -->
                        <div class="row mt-3">
                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <!-- Content -->
                                <h6 class="text-uppercase fw-bold">Company name</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px"
                                />
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Products</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px"
                                />
                                <p>
                                    <a href="#!" class="text-white">MDBootstrap</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">MDWordPress</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">BrandFlow</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Bootstrap Angular</a>
                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px"
                                />
                                <p>
                                    <a href="#!" class="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Help</a>
                                </p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px"
                                />
                                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            <!-- Grid column -->
                        </div>
                        <!-- Grid row -->
                    </div>
                </section>
                <!-- Section: Links  -->

                <!-- Copyright -->
                <div
                    class="text-center p-3"
                    style="background-color: rgba(0, 0, 0, 0.2)"
                >
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                    >
                </div>
                <!-- Copyright -->
            </footer> */}
        </div>
    );
};

export default Footer;