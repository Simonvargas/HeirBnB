import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  Link } from 'react-router-dom';
import styles from './AddListing.module.css'
import { createListing } from '../../store/listing'

function AddListing({setShowModal1, showModal}) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('US')
    const [image, setImage] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [description, setDescription] = useState('')

   
// 
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const user_id = sessionUser?.id
    
    useEffect(() => {
      const data = []
      if (showModal === false) {
        setErrors(data)
   }}, [showModal])
    
  


    const listingCreate = async (e) => {
         e.preventDefault()
         console.log(user_id)
         const data = []
         if (title === '') {
           data.push('Title Field is empty')
         } 
         if (image === '') {
           data.push('Image field is empty')
         } 
         if (description === '')  {
          data.push('Description field is empty')
         }
         if (title.length > 50) {
           data.push('Title cannot be longer than 50 characters')
         }
         if (description.length > 1000) {
           data.push('details cannot be longer than 1000 characters')
         }
         if (price <= 0) {
           data.push('please enter an amount greater than 0')
         }
         if (state === '') {
           data.push('please enter state')
         }
         if (city === '') {
          data.push('please enter city')
        }
         setErrors(data)
         if (data.length === 0) {
         await dispatch(createListing(user_id, title, price, address, city, state, country, image, latitude, longitude, description))
         setTitle('')
         setPrice('')
         setAddress('')
         setCity('')
         setState('')
         setImage('')
         setLatitude('')
         setLatitude('')
         setShowModal1(false)
         setDescription('')
         }
    }
  
  
  return  (
      
  <div className={styles.container}>
    
      <div className={styles.photoContainer}>
      <Link  className={styles.link} to='/'>
      {/* <img alt='Project' src='https://i.imgur.com/giDqQ9u.png' className={styles.h1}></img> */}
      </Link>
      </div>
      <div className={styles.container2}>
    <form  className={styles.inputForm}>
    <div className={styles.errors1}>
      {errors.map(err =>( <ul><li>{err}</li></ul>))}
      </div>
        <h2 className={styles.h2}>Host a Spot</h2>
      <div className={styles.container3}>
   
      <input
      className={styles.input}
      type='hidden'
      value={user_id}
      />

      <input
      placeholder='Title'
      className={styles.input}
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>

     <input
      placeholder='Price'
      className={styles.input}
      type='number'
      value={price}
      onChange={(e) => setPrice(e.target.value)}/>

      <input 
      placeholder='Address'
      className={styles.input}
      type='text'
      value={address}
      onChange={(e) => setAddress(e.target.value)}/>
         
 
        <input 
      placeholder='City'
      className={styles.input}
      type='text'
      value={city}
      onChange={(e) => setCity(e.target.value)}/>

    <input 
      placeholder='State'
      className={styles.input}
      type='text'
      value={state}
      onChange={(e) => setState(e.target.value)}/>

    <input 
      placeholder='Latitude (Optional)'
      className={styles.input}
      type='number'
      value={latitude}
      onChange={(e) => setLatitude(e.target.value)}/>  

    <input 
      placeholder='Longitude (Optional)'
      className={styles.input}
      type='number'
      value={longitude}
      onChange={(e) => setLongitude(e.target.value)}/>

    <input 
      placeholder='Image Url'
      className={styles.input}
      type='text'
      value={image}
      onChange={(e) => setImage(e.target.value)}/>
   
     <textarea
      placeholder='description'
      className={styles.input}
      type='text'
      value={description}
      onChange={(e) => setDescription(e.target.value)}/>
      
      <button  onClick={listingCreate} className={styles.btn} type='submit'>Host your Spot</button>
      </div>
      </form>
      </div>
      </div>
   
  );
}

export default AddListing;