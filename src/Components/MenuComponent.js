import React, {useState } from "react";
import { DISHES } from '../Components/Dishes';
import Card from 'react-bootstrap/Card';


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
                        <Card.Img top width="100%" src={dish.image} alt={dish.name} />
                        <Card.Body>
                            <Card.Title className="font-weight-bold"> {dish.name}</Card.Title>
                            <Card.Text> {dish.description} </Card.Text>
                        </Card.Body>
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
                              <Card.Img variant="top" width="100%" src={dish.image} alt={dish.name} />
                              <Card.Body>
                                  <Card.Title className="font-weight-bold"> {dish.name}</Card.Title>
                                  <Card.Text> {dish.description} </Card.Text>
                              </Card.Body>
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
