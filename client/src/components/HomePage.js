import React from 'react'
import LayoutPage from './LayoutPage'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
   { url: "https://www.weverve.com/wp-content/uploads/2020/10/ecommerce-1.jpg" },
   { url: "https://286140144.e.cdneverest.net/wp-content/uploads/2022/04/usecase_ecommerce-01-1024x738.png" },
  { url: "https://i.pinimg.com/originals/d9/09/7d/d9097d50f8c80c44c47d7e9cc1cf012f.jpg" },
  { url: "https://www.fieldcircle.com/wp-content/uploads/2020/04/cloud-based-field-sales-software.jpeg" },
];
const HomePage = () => {
  return (
    <LayoutPage>
    <div>
    <SimpleImageSlider
        width={1630}
        height={714}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </LayoutPage>
  )
}
export default HomePage