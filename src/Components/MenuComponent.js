import React, {useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import { DISHES } from '../Components/Dishes';


    function Menu({props}){
        const [inputValue, setInputValue] = useState(null);
        const [conditionValue,SetConditionValue]=useState(true);
        const setter=(e)=>{
            setInputValue(e)
            SetConditionValue(!conditionValue);
        }
        const menu =DISHES.map((dish) => {
            return (
              <div  className="col-12 col-md-3" style={{marginTop:'5%'}} key={dish.id}>
                <div>
                    <button onClick={(e) => setter(dish.id)}>
                    <Card>
                        <CardImg variant="top" width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle className="font-weight-bold"> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                    </button>
                </div> 
            </div>
            );
        });
        const menu1 =DISHES.map((dish) => {
            if (dish.id===inputValue){
                return (
                    <div  className="col-12" style={{marginTop:'5%'}} key={dish.id}>
                      <div>
                          <button onClick={(e) => setter(null)} style={{width:'100%'}}> 
                          <Card>
                              <CardImg variant="top" width="100%" src={dish.image} alt={dish.name} />
                              <CardBody>
                                  <CardTitle className="font-weight-bold"> {dish.name}</CardTitle>
                                  <CardText> {dish.description} </CardText>
                              </CardBody>
                          </Card>
                          </button>
                      </div> 
                  </div>
                  );
            }
            
        });
        return(
            <div className="container">
                <div className="row">
                    {conditionValue?menu:null}
                    {conditionValue?null:menu1}
                </div>
                
            </div>
        );
    }

export default Menu;
