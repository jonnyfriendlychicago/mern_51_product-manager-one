import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import {Card, Form} from 'react-bootstrap'; 

const ProductFormCmp = () => {
    // const [message, messageSetter] = useState("Loading...")
    const [title, titleSetter ] = useState("");
    const [price, priceSetter] = useState("");
    const [description, descriptionSetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/products", {
            title, 
            price, 
            description
        })
            .then(res=> {
                console.log(res); 
                console.log(res.data); 
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <Card style = {{width: '700px', padding: '10px', border: "none"}} > 
            <h1>Product Manager: create new product</h1>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        style = {{width: '300px', height: "25px"}}
                        type = "textarea"
                        // value={toDo}
                        onChange ={(e) => titleSetter(e.target.value)}
                    /> 
                </Form.Group>

                <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        style = {{width: '300px', height: "25px"}}
                        type = "textarea"
                        // value={toDo}
                        onChange ={(e) => priceSetter(e.target.value)}
                    /> 
                </Form.Group>

                <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        style = {{width: '300px', height: "25px"}}
                        type = "textarea"
                        // value={toDo}
                        onChange ={(e) => descriptionSetter(e.target.value)}
                    /> 
                </Form.Group>

                {/* below is fine, but not updated yet wed 5/11 */}

                {/* <Form.Group className="mb-3 bg-white" controlId="FormGroup_02">
                    <Form.Label>Work Area:</Form.Label>
                    <Form.Select 
                            style = {{width: '300px', height: '35px'}} 
                            aria-label="Default select example"
                            onChange={ workAreaHandle }  >
                            <option selected></option>
                            <option value="diet">Diet</option>
                            <option value="fitWell">Fitness/Wellness</option>
                            <option value="homeMaintenance">Home Maintenance</option>
                            <option value="work">Work</option>
                            <option value="kids">Kids</option>
                            <option value="contEd">Cont'd Ed/Skills</option>
                            <option value="social">Social</option>
                            <option value="yourTime">Your Thing</option>
                    </Form.Select>
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="ToDo03">
                    <Form.Control style = {{width: "100px"}} className="btn btn-primary" type = "submit" value="Create"/>
                </Form.Group>
            </Form> 
        </Card>

        {/* below is functional, but superceded by above. wed 5/11 */}

        {/* <form onSubmit={handleSubmit}>
            <p>
                <label>stringFieldOne:</label><br/>
                <input type="text" onChange={(e) => stringFieldOneSetter(e.target.value)}/>
            </p>
            <p>
                <label>stringFieldTwo:</label><br/>
                <input type="text" onChange={(e) => stringFieldTwoSetter(e.target.value)}/>
            </p>
            <input type="submit" />

        </form> */}
        </>
    )

}; 

export default ProductFormCmp; 