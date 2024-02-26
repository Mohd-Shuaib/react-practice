import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="head text-center">
          <h1>Our Services</h1>
        </div>
        <div className="row">
            {
              Sdata.map((val, index)=>{
                console.log(val.img,'sgasdk')
                return <Card name={val.name} img={val.img} />
              })
            }
        </div>
      </div>
    </>
  );
};

export default Services;
