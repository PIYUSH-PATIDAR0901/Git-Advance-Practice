import React from 'react';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [eml, setEml] = useState('')
    const [pass, setPass] = useState('')
    const [cpass, setCpass] = useState('')
    const [nares, setNaRes] = useState('')
    const [lares, setLaRes] = useState('')
    const [emres, setEmRes] = useState('')
    const [pasres, setPasRes] = useState('')
    const [cpasres, setCPasRes] = useState('')


    const Submit= (e) =>{
        let atpos = eml.indexOf('@')
        let dotpos = eml.lastIndexOf('.')
        if(name === "" || name.length < 2){
            setNaRes("Invalid name")
            return false
        }else if(lname === "" ){
            setLaRes("Invalid name")
            return false
        }else if(eml === "" && atpos < dotpos + 2 ){
            setEmRes("Invalid Email Address")
            return false
        }else if(pass.length <= 6){
            setPasRes("Password length must be greater than 6 digit")
            return false
        }else if(pass !== cpass){
            setCPasRes("Your password not same as Previous password")
            return false
        }
        e.preventDefault()
    }

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-3">
          <label htmlFor="validationServer01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control "
            id="validationServer01"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          /> <span style={{color:'red'}}>{nares}</span>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            value={lname}
            onChange={(e)=>setLname(e.target.value)}
            id="validationServer02"
            required
          /> <span style={{color:'red'}}>{lares}</span>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer02" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="validationServer02eml"
            value={eml}
            onChange={(e)=>setEml(e.target.value)}
            required
          /> <span style={{color:'red'}}>{emres}</span>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServerUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              type="text"
              className="form-control "
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control "
            id="validationServer03"
            aria-describedby="validationServer03Feedback"
            required
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer04" className="form-label">
            State
          </label>
          <select
            className="form-select "
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option selected value="">
              Choose...
            </option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Utter Pradesh">Utter Pradesh</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu Kashmir">Jammu Kashmir</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajesthan">Rajesthan</option>
            <option value="Bihar">Bihar</option>
            <option value="Assam">Assam</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer05" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            id="validationServer05"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            aria-describedby="validationServer05Feedback"
            required
          /> <span style={{color:'red'}}>{pasres}</span>
          <div id="validationServer05Feedback" className="invalid-feedback">
            Please provide a valid Password.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationServer05Confirm" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control "
            id="validationServer05Confirm"
            value={cpass}
            onChange={(e)=>setCpass(e.target.value)}
            aria-describedby="validationServer05Feedback"
            required
          /> <span style={{color:'red'}}>{cpasres}</span>
          <div id="validationServer05FeedbackConfirm" className="invalid-feedback">
            Please provide a valid Confirm Password.
          </div>
        </div>
        
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={()=>Submit()}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
