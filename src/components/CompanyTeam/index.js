import React from 'react'
import Link from 'gatsby-link'
import keiz from './keiz.jpg'
import kolev from './kolev.jpg'
import belous from './belous.jpg'
import timrieva from './timrieva.jpg'
import kiselev from './kiselev.jpg'


const CompanyTeam = () => (

<section className="g-bg-white">
  <div className="container">
    <div className="row justify-content-center g-mb-110">
      <div className="col-lg-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="h1 g-color-black g-font-weight-600 mb-5">Our Team</h2>
        </div>
        {/* End Heading */}

  {/* User Block */}
  <div className="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
    <div className="row">
      <div className="col-lg-4 g-mb-40 g-mb-0--lg">
        {/* User Image */}
        <div className="u-block-hover g-pos-rel g-mb-20">
          <figure>
            <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={kiselev} alt="Michael Kiselev" />
          </figure>
        </div>
        {/* User Image */}
        {/* User Contact Buttons */}
        <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="https://www.facebook.com/xacrett">
          <i className="icon-user-follow g-pos-rel g-top-1 g-mr-5" /> Follow Me
        </a>
        <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="mailto:ceo@ponics.tech">
          <i className="icon-envelope-letter g-pos-rel g-top-1 g-mr-5" /> Contact Me
        </a>
        {/* End User Contact Buttons */}
      </div>
      <div className="col-lg-8">
        {/* User Details */}
        <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
          <h2 className="g-font-weight-300 g-mr-10">Michael Kiselev</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/xacrett">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://twitter.com/xacrett">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-twitter" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/xacrett">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.instagram.com/xacrett/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/mihail-kiselov-28358193/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* End User Details */}
        {/* User Position */}
        <h4 className="h6 g-font-weight-300 g-mb-10">
          <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" /> CEO. Chief Engineer. Mastermind
        </h4>
        {/* End User Position */}
        {/* User Info */}
        <ul className="list-inline g-font-weight-300">
          <li className="list-inline-item g-mr-20">
            <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" /> Moscow, Russian Feeration
          </li>
          <li className="list-inline-item g-mr-20">
            <i className="icon-link g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" />  <a className="g-color-main g-color-primary--hover" href="http://xacrett.com">xacrett.com</a>
          </li>
        </ul>
        {/* End User Info */}
        <hr className="g-brd-gray-light-v4 g-my-20" />
        <p className="lead g-line-height-1_8">Michael is the founder of Ponics Tech and the developer of the initial technologies that we use in our projects. <br />Experience in the agronomic sector for more than 8 years. Entrepreneurial experience over 7 years.<br />
He graduated from the Kiev Polytechnic Institute with a degree in Chemical Technology</p>
        <hr className="g-brd-gray-light-v4 g-my-20" />
      </div>
    </div>
  </div>
  {/* End User Block */}



  {/* User Block */}
  <div className="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
    <div className="row">
      <div className="col-lg-4 g-mb-40 g-mb-0--lg">
        {/* User Image */}
        <div className="u-block-hover g-pos-rel g-mb-20">
          <figure>
            <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={keiz} alt="Pavel Keizerov" />
          </figure>
        </div>
        {/* User Image */}
        {/* User Contact Buttons */}
        <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="https://vk.com/keyzerov">
          <i className="icon-user-follow g-pos-rel g-top-1 g-mr-5" /> Follow Me
        </a>
        <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="mailto:keiz@ponics.tech">
          <i className="icon-envelope-letter g-pos-rel g-top-1 g-mr-5" /> Contact Me
        </a>
        {/* End User Contact Buttons */}
      </div>
      <div className="col-lg-8">
        {/* User Details */}
        <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
          <h2 className="g-font-weight-300 g-mr-10">Pavel Keizerov</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/keyzerov">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/pavel-keyzerov-13893a162/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.instagram.com/keizerof/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        {/* End User Details */}
        {/* User Position */}
        <h4 className="h6 g-font-weight-300 g-mb-10">
          <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" /> COO. Project Manager.
        </h4>
        {/* End User Position */}
        {/* User Info */}
        <ul className="list-inline g-font-weight-300">
          <li className="list-inline-item g-mr-20">
            <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" /> Moscow, Russian Federation
          </li>
        </ul>
        {/* End User Info */}
        <hr className="g-brd-gray-light-v4 g-my-20" />
        <p className="lead g-line-height-1_8">Experienced manager with a well-developed skills in solving crisis situations.<br />
Experience in business for more than 5 years.<br />
Has the specialty of a laboratory chemist.<br /></p>
        <hr className="g-brd-gray-light-v4 g-my-20" />
      </div>
    </div>
  </div>
  {/* End User Block */}





  {/* User Block */}
  <div className="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
    <div className="row">
      <div className="col-lg-4 g-mb-40 g-mb-0--lg">
        {/* User Image */}
        <div className="u-block-hover g-pos-rel g-mb-20">
          <figure>
            <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={timrieva} alt="Nika Timrieva" />
          </figure>
        </div>
        {/* User Image */}
        {/* User Contact Buttons */}
        <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="https://www.instagram.com/nitkawoo/">
          <i className="icon-user-follow g-pos-rel g-top-1 g-mr-5" /> Follow Me
        </a>
        <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="mailto:nika@ponics.tech">
          <i className="icon-envelope-letter g-pos-rel g-top-1 g-mr-5" /> Contact Me
        </a>
        {/* End User Contact Buttons */}
      </div>
      <div className="col-lg-8">
        {/* User Details */}
        <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
          <h2 className="g-font-weight-300 g-mr-10">Nika Timrieva</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/profile.php?id=100025540425077">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/nikatimrieva">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.instagram.com/nitkawoo/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/nika-timrieva-6bb932162/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* End User Details */}
        {/* User Position */}
        <h4 className="h6 g-font-weight-300 g-mb-10">
          <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" />Chief Lawyer.
        </h4>
        {/* End User Position */}
        {/* User Info */}
        <ul className="list-inline g-font-weight-300">
          <li className="list-inline-item g-mr-20">
            <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" /> Moscow, Russian Feeration
          </li>
        </ul>
        {/* End User Info */}
        <hr className="g-brd-gray-light-v4 g-my-20" />
        <p className="lead g-line-height-1_8">The inspirer of turning a hobby into a full-fledged production, which is Ponics Tech now.<br />
Nika is a high-class lawyer, with extensive experience in government agencies of the Russian Federation.<br />Nika has valuable practical experience in monitoring and analysis in the field of ecology and nature management<br />
Graduated with honors The Russian Academy of National Economy and Public Service under the President of the Russian Federation</p>
        <hr className="g-brd-gray-light-v4 g-my-20" />
      </div>
    </div>
  </div>
  {/* End User Block */}





  {/* User Block */}
  <div className="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
    <div className="row">
      <div className="col-lg-4 g-mb-40 g-mb-0--lg">
        {/* User Image */}
        <div className="u-block-hover g-pos-rel g-mb-20">
          <figure>
            <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={kolev} alt="Ivan Kolev" />
          </figure>
        </div>
        {/* User Image */}
        {/* User Contact Buttons */}
        <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="https://vk.com/bivanos666">
          <i className="icon-user-follow g-pos-rel g-top-1 g-mr-5" /> Follow Me
        </a>
        <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="mailto:ikolev@ponics.tech">
          <i className="icon-envelope-letter g-pos-rel g-top-1 g-mr-5" /> Contact Me
        </a>
        {/* End User Contact Buttons */}
      </div>
      <div className="col-lg-8">
        {/* User Details */}
        <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
          <h2 className="g-font-weight-300 g-mr-10">Ivan Kolev</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/profile.php?id=100014559934241">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/bivanos666">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/ivan-k-195b55163/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* End User Details */}
        {/* User Position */}
        <h4 className="h6 g-font-weight-300 g-mb-10">
          <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" /> Lead Engineer
        </h4>
        {/* End User Position */}
        {/* User Info */}
        <ul className="list-inline g-font-weight-300">
          <li className="list-inline-item g-mr-20">
            <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" /> Moscow, Russian Federation
          </li>
        </ul>
        {/* End User Info */}
        <hr className="g-brd-gray-light-v4 g-my-20" />
        <p className="lead g-line-height-1_8">Highly qualified machine tools engineer. Has extensive knowledge in materials science. <br />Experience in the development of industrial automation was obtained during the implementation of the Ponics Tech pilot project in 2014-2015.<br />Graduated from the Moscow Government Technological University</p>
        <hr className="g-brd-gray-light-v4 g-my-20" />
      </div>
    </div>
  </div>
  {/* End User Block */}






    {/* User Block */}
    <div className="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
    <div className="row">
      <div className="col-lg-4 g-mb-40 g-mb-0--lg">
        {/* User Image */}
        <div className="u-block-hover g-pos-rel g-mb-20">
          <figure>
            <img className="img-fluid w-100 u-block-hover__main--zoom-v1" src={belous} alt="Aleksei Belous" />
          </figure>
        </div>
        {/* User Image */}
        {/* User Contact Buttons */}
        <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="https://www.facebook.com/alwhite.ru">
          <i className="icon-user-follow g-pos-rel g-top-1 g-mr-5" /> Follow Me
        </a>
        <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="mailto:itcrew@ponics.tech">
          <i className="icon-envelope-letter g-pos-rel g-top-1 g-mr-5" /> Contact Me
        </a>
        {/* End User Contact Buttons */}
      </div>
      <div className="col-lg-8">
        {/* User Details */}
        <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
          <h2 className="g-font-weight-300 g-mr-10">Aleksei Belous</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/alwhite.ru">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/alwhites">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
              </a>
            </li>
            <li className="list-inline-item g-mx-2">
              <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.instagram.com/alwhite.olt/">
                <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        {/* End User Details */}
        {/* User Position */}
        <h4 className="h6 g-font-weight-300 g-mb-10">
          <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" /> Head of IT Department
        </h4>
        {/* End User Position */}
        {/* User Info */}
        <ul className="list-inline g-font-weight-300">
          <li className="list-inline-item g-mr-20">
            <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" /> Moscow, Russian Federation
          </li>

        </ul>
        {/* End User Info */}
        <hr className="g-brd-gray-light-v4 g-my-20" />
        <p className="lead g-line-height-1_8">Alexey has extensive experience in developing and maintaining complex IT systems with a bias towards work with automated systems. Great experience was gained in the course of a long-term cooperation with The Federal Service for Supervision in the Sphere of Ecology.
<br />He graduated from the Moscow Aviation Institute, engineer of the space aircraft and upper stages.<br /> Certified Cisco specialist in the field of computer networks.</p>
        <hr className="g-brd-gray-light-v4 g-my-20" />
      </div>
    </div>
  </div>
  {/* End User Block */}
  
</div>

</div>
</div>
</section>



)

export default CompanyTeam
