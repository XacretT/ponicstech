import React from 'react'
import Link from 'gatsby-link'
import parallax from './parallax.jpg'


const ContactForm = () => (

<div>
<section className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall " data-options="{direction: &quot;fromtop&quot;, animation_duration: 25, direction: &quot;reverse&quot;}">

  <div className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-size-cover g-bg-pos-top-center g-bg-black-opacity-0_2--after" style={{height: '140%', backgroundImage: `url(${parallax})`}}/>

  <div className="container g-color-white text-center g-pt-150 g-pb-100">
    <h3 className="h2 g-font-weight-300 mb-0">You came to the right place</h3>
    <h2 className="g-font-weight-700 g-font-size-80 text-uppercase">Let's Talk</h2>
  </div>

</section>

<section className="container g-py-100">
  <div className="row g-mb-20">
    <div className="col-lg-6 g-mb-50">
      
      <h2 className="h1 g-color-black g-font-weight-700 mb-4">How can we assist you?</h2>
      <p className="g-font-size-18 mb-0">We are the manufacturer of idustrial-grade aeroponics equipment </p>
      
    </div>
    <div className="col-lg-3 align-self-end ml-auto g-mb-50">
      <div className="media">
        <div className="d-flex align-self-center">
          <span className="u-icon-v2 u-icon-size--sm g-color-white g-bg-primary rounded-circle mr-3">
            <i className="g-font-size-16 icon-communication-033 u-line-icon-pro" />
          </span>
        </div>
        <div className="media-body align-self-center">
          <h3 className="h6 g-color-black g-font-weight-700 text-uppercase mb-0">Phone Number</h3>
          <p className="mb-0"><a href="tel:+79267920192">+79267920192</a></p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 align-self-end ml-auto g-mb-50">
      <div className="media">
        <div className="d-flex align-self-center">
          <span className="u-icon-v2 u-icon-size--sm g-color-white g-bg-primary rounded-circle mr-3">
            <i className="g-font-size-16 icon-communication-062 u-line-icon-pro" />
          </span>
        </div>
        <div className="media-body align-self-center">
          <h3 className="h6 g-color-black g-font-weight-700 text-uppercase mb-0">Email Address</h3>
          <p className="mb-0"><a href="mailto:hi@ponics.tech">hi@ponics.tech</a></p>
        </div>
      </div>
    </div>
    <section className="container g-bg-gray-light-v5 g-pa-30">
  <div className="row">
    <div className="col-md-9 align-self-center">
      <h3 className="h4">Representative in Ukraine:
        <a className="g-color-primary" href="mailto:kiselyov.uns@gmail.com"> kiselyov.uns@gmail.com </a>
        or give a call
        <a className="g-color-primary" href="tel:+380504284574"> +38 050 4284574</a>
      </h3>
      <p className="lead g-mb-20 g-mb-0--md">We will be glad to cooperate with you in any corner of the planet.</p>
    </div>
  </div>
</section>
  </div>





  <form name="contact" method="POST" netlify data-netlify="true" action="formok">
  <div className="row justify-content-center">
    <div className="col-md-5">

        <div className="row">
          <div className="col-md-6 form-group g-mb-20">
            <label className="g-color-gray-dark-v2 g-font-size-13">First name</label>
            <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15" type="text" placeholder="John" name="firstname" />
          </div>
          <div className="col-md-6 form-group g-mb-20">
            <label className="g-color-gray-dark-v2 g-font-size-13">Last name</label>
            <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15" type="text" placeholder="Doe" name="lastname"/>
          </div>
        </div>
        <div className="g-mb-20">
          <label id="my-mail" className="g-color-gray-dark-v2 g-font-size-13">Your email</label>
          <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15" type="email" placeholder="johndoe@gmail.com" name="email"/>
        </div>
        <div className="g-mb-20">
          <label className="g-color-gray-dark-v2 g-font-size-13">Phone number</label>
          <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus rounded-3 g-py-13 g-px-15" type="tel" placeholder="+ (01) 222 33 44" name="tel"/>
        </div>
      
    </div>
    <div className="col-md-7">
      <div className="g-mb-40">
        <label className="g-color-gray-dark-v2 g-font-size-13">Your message</label>
        <textarea id="my-message" className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-resize-none rounded-3 g-py-13 g-px-15" rows={12} placeholder="Hi there, I would like to ..." defaultValue={""} name="message"/>
      </div>
      <div className="text-right">
        <button className="btn u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase rounded-3 g-py-12 g-px-35" type="submit" role="button" name="submit">Send</button>
      </div>
    </div>
  </div>
  </form>
</section>
</div>


)

export default ContactForm