import React from 'react';
import { IoCall, IoLocation, IoLogoWhatsapp } from "react-icons/io5";
const Infor = props => {
  const { info } = props;


  return(

 <div className="w-full new1 bg-white rounded-lg  dark:bg-gray-1500 dark:text-black-500 col-md-6 ">
      <div className="card mt-2 mb-2 mr-2 ml-2 shadow-sm">
        <div className="card-body">  
          <div className="row">

          <div className="col">
            
          <h1  className="flex capitalize dark:text-white items-center justify-start h1text">
                            {info.hospital}
                        </h1>
                </div>
               

                        </div>
                         <p className="type3">Last Update On:{info.update}</p>
                         <div className="row">
                           <div className="col">
<div  className="text-sm  uppercase mb-2 text-gray-700 font-semibold dark:text-white">
                              <span className="mr-2"> <a className="phone_style" href = {`tel:${info.mobile}`} > <IoCall/> {info.mobile} </a></span> 
                              
                            </div>
                           </div>
                           <div className="col">
                              <div className="col">
                          
                          <div className="type">
                              <span className="mr-2 mb-2 type2">{info.hospitalType}</span> 
                               
                            </div>
                </div>
                           </div>
                         </div>
                        

                        
                  
                        <div className="text-sm  uppercase text-gray-700 font-semibold dark:text-white mb-3">
                                
                                <span className="ml-2"> <a className="phone_style2" href={'https://maps.google.com?q=${info.address}'}> <IoLocation/> {info.address} </a></span>
                            </div>

           <div className="row">  
           <div className="col">
          <p className="card-text card-text1">
             <p className="bold" style={{margin: '0px 0px 0px 0px', color:'#1165ae'}}>Oxygen Cylinder</p>
            <strong>
             
               Avalaible |
            </strong>
            <span className="ml-2"> {info.oxygenBeds}</span>
            <br />
            <p className="size"> <strong>
              <i className="fas fa-compact-disc" /> Status:</strong> {info.oxygenBedsStatus} </p>
          </p>
          </div>
           <div className="col">
          <p className="card-text card-text1">
            <p className="bold" style={{margin: '0px 0px 0px 0px', color:'#1165ae'}}> ICU Beds</p>
            <strong>
              
              Avalaible |
            </strong>
            <span className="ml-2">  {info.icuBeds}</span>
            <br />
           <p className="size"> <strong> <i className="fas fa-compact-disc" /> Status:</strong> {info.icuBedsStatus}
             </p>
          </p>
          </div>
          </div>  


                    <div className="row">
                      <div className="col">

                      </div>
                     <div className="col">
                              <div className="col">
                          
                          <div className="share">
                              <span className="mr-2 mb-2 share1"> <a className="phone_style1 " href = {`https://wa.me/?text=Hi! I found this contact on CovidDiary. Last Update at ${info.update}, Name: ${info.hospital}, Contact Details: ${info.mobile}, Address: ${info.address}, Oxygen Cylinders: ${info.oxygenbeds}, ICU Beds: ${info.icubeds}. You can also search about other Verified Active Resources for Covid by visiting http://coviddiary.in/  P.S. - We do not promote advance payments and would like to request you to not do any sort of advance payment to anyone until you get the resources.`}> Share Now <IoLogoWhatsapp/> </a></span> 
                               
                            </div>
                </div>
                           </div>
                    </div>
                              


            <hr className="dark:border-gray-900" />
             <div className="w-11/12 mt-2">
                            <div className="text-sm">{info.comment}</div>

                        </div>
        </div>
      </div>
    </div>

  );
};

export default Infor;