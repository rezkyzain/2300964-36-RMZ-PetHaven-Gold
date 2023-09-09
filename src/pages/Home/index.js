
import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Aboutme from '../../asset/aboutme.jpeg';
import Ourservices from '../../asset/ourservices.jpeg';


const HomeScreen =  () => {



  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <h2>About Us</h2>
          <img src={Aboutme} className="aboutmeimg"/>
          <p>We are a dedicated team of pet enthusiasts who are passionate about the well-being and happiness of your pets. With years of experience in pet care, we understand the unique needs of each pet, whether they're playful puppies, independent cats, or exotic companions. Our team includes trained professionals who provide top-notch care, ensuring your pets are comfortable and content during their stay with us.</p>
          <h3 className="mt-4">Why You Should Choose Us</h3>
          <ul>
            <li>Passion for Pets: We're pet lovers ourselves, so we understand the love and care your pets deserve.</li>
            <li>Safety First: Your pet's safety is our priority, and we maintain strict standards to ensure their well-being.</li>
            <li>Personalized Care: We tailor our services to meet the unique needs and preferences of each pet.</li>
            <li>Convenience: Our convenient location and flexible hours make it easy for you to access our services.</li>
          </ul>
          <hr className="d-sm-none"/>
        </div>

        <div className="col-sm-8">
          <h2>Our Services</h2>
          <ul>
            <li><b>Pet Boarding:</b> We offer a comfortable and secure home away from home for your pets when you're traveling or need a reliable place for them to stay.</li>
            <li><b>Pet Grooming:</b> Pamper your pets with our grooming services, including baths, haircuts, and nail trims, to keep them looking and feeling their best.</li>
            <li><b>Pet Training:</b> Our experienced trainers can help your furry friend learn essential skills, improve behavior, and build a stronger bond with you.</li>
            <li><b>Pet Health:</b> We partner with local veterinarians to provide routine check-ups, vaccinations, and minor medical care to keep your pets in optimal health.</li>
            <li><b>Pet Supplies:</b> Shop for high-quality pet supplies and nutritious food at our on-site store to meet all your pet's needs.</li>
          </ul>
          <img src={Ourservices} className="ourservicesimg"/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );

}

export default HomeScreen;



