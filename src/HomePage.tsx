import "./HomePage.css";
import Sliders from './Components/Sliders/Sliders';
import Downloads from './Components/Downloads/Downloads';
import Images from './Components/Images/Images';

const HomePage = () => {

  return (
    <div className='HomePage'>
        <div  className='HomePage_Upload_preview_Download_Binder'>
           <Images/>
         <div className='HomePage_Download_Binder'>
            <Downloads/>
         </div>
        </div>
        <div className='HomePage_Brightness_Saturation_Contrast_Rotate_Deg_Binder'>
        <div className='HomePage_Brightness_Saturation_Contrast_Rotate_Deg'>
            <Sliders/>
        </div>
        </div>
    </div>
  )
}

export default HomePage