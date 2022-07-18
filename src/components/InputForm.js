import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function InputForm() {

    const [validated, setValidated] = useState(false);

    const[email, setEmail] = useState();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    function validation(e){
        console.log('Validation is happening I think');
        console.log(e);
        if(e.includes('@'))
        {
            if(e.includes('.com'))
            {
                setEmail('');
            }
            else
            {
                setEmail('Your email requires a .com');
            }
        }        
        else{
            if(e.includes('.com'))
            {
                setEmail('Your email requires an @ before the .com');
            }
            else{
                setEmail('Your email requires both an @ and a .com at the end');
            }
        }
    }

    return (


        <Form noValidate validated = {validated} onSubmit = {handleSubmit}>
            <Form.Group>
                <Form.Label>NAME</Form.Label>
                <Form.Control type="text" placeholder="Name" required pattern="[a-zA-Z]{2,}\s[a-zA-Z]{2,}"/>
                <Form.Control.Feedback type = "invalid">
                    Please enter your first and last name
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>EMAIL</Form.Label>
                <Form.Control onChange = {(e) => validation(e.target.value)} type = "email" placeholder="Email" pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" required/>
                <Form.Control.Feedback type = "invalid">
                    {email ? email : 'Please enter your email'}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>ZIP CODE</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" required pattern = "^(?!0{5})(\d{5})(?!-?0{4})(|-\d{4})?$"/>
                <Form.Control.Feedback type = "invalid">
                    Please enter your zip code
                </Form.Control.Feedback>

            </Form.Group>

            <p>By clicking “Sign Up“ you are agreeing to the <a href = "https://signup.grantsreach.com/lp#/terms/60a68b87b1bfde5d8f97e648">Terms &amp; Conditions</a> and 
            <a href = "https://signup.grantsreach.com/lp#/privacy/60a68b87b1bfde5d8f97e648"> Privacy Policy.</a></p>

            <Button variant="dark" type = "submit" onClick = {validation}>
                Submit
            </Button>

        </Form>
    );


}

export default InputForm;