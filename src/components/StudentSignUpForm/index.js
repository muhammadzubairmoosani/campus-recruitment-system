import React from "react";
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap'
import AuthMiddleware from "../../store/Middleware/authMiddleware";
class StudentSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: 'Student',
            name: '',
            rollNo: '',
            gender: '',
            mobile: '',
            age: '',
            university: '',
            branch: '',
            marks: '',
            email: '',
            password: '',
            address: '',
            otherSkills: ''
        }
    }
    _onChange = (key, value) => this.setState({ [key]: value });
    render() {
        const { signUpDispatch } = this.props;
        return (
            <div className='d-flex justify-content-center'>
                <Form className='shadow-lg my-3 col-xl-5 col-md-6 col-11 p-4 bg-white rounded-lg'>
                    <h3 className="deep-grey-text mb-4" style={{ fontFamily: 'sans-serif' }}>
                        Student Register
                 </h3>
                    <Form.Row className='my-3'>
                        <Col>
                            <Form.Control placeholder="Full name" onChange={(text) => this._onChange('name', text.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Roll No" onChange={(text) => this._onChange('rollNo', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className='d-flex'>
                            <Form.Check
                                className='mx-5'
                                type="radio"
                                label="Male"
                                name='gender'
                                value='male'
                                onChange={(text) => this._onChange('gender', text.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name='gender'
                                value='female'
                                onChange={(text) => this._onChange('gender', text.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Mobile" onChange={(text) => this._onChange('mobile', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='my-3'>
                        <Col>
                            <Form.Control placeholder="Age" onChange={(text) => this._onChange('age', text.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="University" onChange={(text) => this._onChange('university', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='my-3'>
                        <Col>
                            <Form.Control as="select" onChange={(text) => this._onChange('Branch', text.target.value)}>
                                <option>Select Branch...</option>
                                <option>Arts</option>
                                <option>BCA</option>
                                <option>BE IT</option>
                                <option>BSC EXTC</option>
                                <option>BSC IT</option>
                                <option>BSC</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Marks" onChange={(text) => this._onChange('marks', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='my-3'>
                        <Col>
                            <Form.Control placeholder="Email" onChange={(text) => this._onChange('email', text.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Password" onChange={(text) => this._onChange('password', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='my-3'>
                        <Col>
                            <Form.Control placeholder="Address" onChange={(text) => this._onChange('address', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder="Other Skills" onChange={(text) => this._onChange('otherSkills', text.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button className='w-100' onClick={() => signUpDispatch(this.state)}>
                                <small>REGISTERED</small>
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
};
function mapDispatchToProps(dispatch) {
    return {
        signUpDispatch: data => dispatch(AuthMiddleware.signUp(data))
    }
}
export default connect(null, mapDispatchToProps)(StudentSignUp);