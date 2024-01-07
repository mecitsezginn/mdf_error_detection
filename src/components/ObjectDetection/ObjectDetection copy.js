import React, { useState } from 'react'
import "./objectStyle.css"
import Header from "../Header";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';



function ObjectDetection() {
  const style = {
    select_btn: {
      backgroundColor: "#e5322d", 
      borderColor: "#e5322d",
      width: "250px",
      height: "50px",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      color: "#fff"
    },
    photo_div:{
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
    },
    example_photo_div:{
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      // marginTop: "10px",
    }
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [imgName, setimgName] = useState(null);
  const [spinnerOnOff, setSpinnerOnOff] = useState(false);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];

  //   // Eğer bir dosya seçildiyse, dosyayı state'e atayabilirsiniz
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // console.log("first", test())


  const select_photo = (photo_name) =>{
    setSelectedImage(photo_name)
    setimgName(photo_name)
  }

  const get_error_mdf = () =>{
    setSpinnerOnOff(true)

    setTimeout(() => {
      if (selectedImage === "mdf1.jpeg"){
        setSelectedImage("mdf1_error.jpg")
      }
  
      if (selectedImage === "mdf2.jpeg"){
        setSelectedImage("mdf2_error.jpg")
      }

      setSpinnerOnOff(false)

    }, "1000");

    
  }


  return (
    <div style={{}}>
        <Header />
        <div className='container'>
            <h2 className='title'>MDF Hata Tespiti</h2>

            
            
            {/* BUTTON */}
            {/* <div className='select-btn-div'>
                <label style={style.select_btn}>
                  Galeriden Fotoğraf Seç
                  <input
                    type="file"
                    accept="image/*" // Sadece resim dosyalarını seçmesini sağlamak için
                    // onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
            </div>
             */}
            



            <div style={style.example_photo_div}>
              <span 
                onClick={() => select_photo("mdf1.jpeg")}
                className={imgName === "mdf1.jpeg" ? "imgBorder imgSpan" : "imgSpan"}
                >
                <img src='mdf1.jpeg' style={{width: "100px"}}></img>
              </span>
              <span 
                onClick={() => select_photo("mdf2.jpeg")}
                className={imgName === "mdf2.jpeg" ? "imgBorder imgSpan" : "imgSpan"}
              >
                <img src='mdf2.jpeg' style={{width: "100px"}}></img>
              </span>
            </div>



            {/* PHOTO */}
            <div >
                {selectedImage && (
                  <div className="mt-4" >
                    <div style={style.photo_div}>
                      <img
                        src={selectedImage}
                        alt="Seçilen Resim"
                        // className="d-block mx-auto"
                        className="imgSize"

                        // style={{ maxWidth: '70%', height: 'auto' }}
                        // style={{ maxWidth: '250px', height: 'auto' }}

                      />
                    </div>
                  </div>
                )}
            </div>



            



            {/* BUTTON */}

            {
              selectedImage !== null 
              ?
                <div className='select-btn-div'>
                  <Button style={style.select_btn} onClick={() => get_error_mdf()}>
                  {
                    spinnerOnOff === true
                    ?
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      style={{marginRight: "10px"}}
                    />
                    : null
                  }

                  <span >Hatayı Bul</span>
                  </Button>
                </div>

              : null
            }
            
            
        </div>

    </div>
  )
}

export default ObjectDetection