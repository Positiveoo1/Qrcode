import React, { useState } from 'react'
import QRCode from 'qrcode'

// With promises


const QrCode = () => {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");

  const send1 = (event) => {
    setInput(event.target.value);
    // With promises
    QRCode.toDataURL(event.target.value)
      .then(url => {
        setQrcode(url)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const submt = (e) => {
    e.preventDefault();
    setDisplay(qrcode);

  }
  return (
    <>
      <div className="main">
        <h1>Make your QR code for anything! </h1>
        <div className="main3">
          <div className="last">
          <form onSubmit={submt}>
            <input className='input-generator' type="text" value={input} placeholder='Please enter a info' onChange={send1} />

            <img className='qr-coder' src={display} />
           <span><i class="fa-sharp fa-solid fa-download"></i> <a className='down' href={display} download={display} >Download</a></span>

            {
              input !== "" ?
                <button className='x' type='button' onClick={() => {
                  setDisplay('')
                  setInput('')
                  setQrcode('')
                }}>X</button>
                : null
            }

          </form>
          </div>
          
        </div>
      </div>



    </>
  )
}

export default QrCode


