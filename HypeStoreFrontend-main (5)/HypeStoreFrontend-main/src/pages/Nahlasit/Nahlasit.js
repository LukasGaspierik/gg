import React from 'react'
import './style.css'

const Nahlasit = () => {
  return (
    <div className='wrappernahlasit'>
        <div className='formnahlasit'>
            <div className='title'>Nahlásiť uživateľa / Obsah</div>
            <div className="inputfield">
              <label for="text">Meno</label>
              <input
                className="input" 
                type="name"
                name="Username"
                placeholder='Zadaj svoje meno'
                />
              </div> 
              <div className='inputfield'>
              <label for='text'>Email</label>
              <input
                className='input'
                type='email'
                name='email'
                placeholder='Zadaj svoj email'  
                />
              </div>
              <div className='inputfield'>
                <label for='text'>Tel. číslo</label>
                <input
                 className='input'
                 type='pNumber'
                 name='pNumber'
                 placeholder='Zadaj svoje tel.čislo'
                    />
                </div>
                <div className="inputfield_select">
                  <label for="text">Dôvod nahlásenia</label>
                    <p className='select_info'>Vyber dôvod, do ktorej sa tvoje nahlásenie najviac hodí.</p>
                      <div className="custom_select" >
                        <select label="Select">
                            <option style={{display: 'none'}}>Zaklikni dôvod</option>
                            <optgroup label='Dôvody'>
                            <option value="1">Spam a nevhodné správanioe</option>
                            <option value="2">Nadávky, diskriminácia alebo nevhodné slová použite v inzeráze</option>
                            <option value="3">Autorské práva</option>
                            <option value="4">Nevhodný inzerát</option>
                            </optgroup>
                        </select>
                    </div>
               </div>
              <div className="inputfield">
                <label>Napíš dôvod nahlásenia</label>
                  <p className='select_info'>Napíš dôvod prečo nahlasuješ uživateľa alebo obsah do konkrétnych bodov.</p>
                  <textarea 
                    className="textarea">
                  </textarea>
              </div>
              <div className="multipart">
                <input id="fileInput" type="file" />
              </div>
              <div className="inputfield">
                  <input type="submit" value="Nahlasiť" className="btn1"></input>
              </div>
        </div> 
    </div>  
  )
}

export default Nahlasit