import { useEffect, useState } from 'react';
import styles from './card.module.css'

const Card = (props) => {
  
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [numberIsOK, setNumberIsOK] = useState(false);
  const [firstStepDone, setFirstStepDone] = useState(false);
  const [otpCode, setOtpCode] = useState(null);

  useEffect(() => {
    (phoneNumber && String(phoneNumber).length >= 9 && String(phoneNumber).length <= 13) ? setNumberIsOK(true) : setNumberIsOK(false);
  }, [phoneNumber])


  useEffect(() => {
    (otpCode && firstStepDone && String(otpCode).length === 6) ? setNumberIsOK(true) : setNumberIsOK(false);
  }, [otpCode])

  const handleFirstStep = () => {
   // uderzenie do API

   // if ok
   setFirstStepDone(true);
   setNumberIsOK(false)
   // else 
   // komunikat o bledach 
  }


  const handleSecondStep = () => {
    // sprawdzanie poprawnosci OTP

    // if ok 
    // (signIn())
    // else 
    // raport o bledach
  }

   
  return (
    <div className={styles.card}>
      <img src="/images/palapa-logo.png" alt="Palapa-logo" className={styles.card__logo}/>
      <h1 className="card__title">Sing in to your account</h1>
      <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number" className={styles.card__input} placeholder='Phone number'/>
      {props.children}
      {firstStepDone && (
         <input value={otpCode} onChange={e => String(e.target.value).length <= 6 && setOtpCode(e.target.value)} type="number" className={styles.card__inputOtp} placeholder='OTP Code' maxLength={9}/>
      )}
      <button className={styles.card__button} disabled={!numberIsOK} onClick={firstStepDone ? handleSecondStep : handleFirstStep}>{numberIsOK ? <img src='/images/Icon.svg' alt='lock-icon' className={styles.card__lockIcon}/> : <img src='/images/Icon-lock.svg' alt='lock-icon' className={styles.card__lockIcon}/>} <p className={styles.card__buttonText}>Sign in</p></button>
    </div>
  );
}
 
export default Card;