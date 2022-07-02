import React,{useContext} from 'react'
import Header from '../components/Header';
import { UserContext } from '../context/UserContext';
import './contacts.css';
const Contacts = () => {

  return (
   
      <div className="contact-container">
  <div style={{textAlign: 'center'}}>

    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="contact-row">
    <div className="contact-column">
      <img src={require('../img/mac.jpg')} style={{width:"100%"}} alt=""/>
    </div>
    <div className="contact-column">
      <form >
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." className='contact-input'/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" className='contact-input'/>
        <label htmlFor="country">Country</label>
        <select id="country" name="country" className='contact-input'>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}} className='contact-input'></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
   
  )
}

export default Contacts