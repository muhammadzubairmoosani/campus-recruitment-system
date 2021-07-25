import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import CompanyMiddleware from '../../store/Middleware/companyMiddleware';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            HRname: '',
            email: '',
            mobile: '',
            address: '',
            accountType: '',
            posts: [],
            description: '',
            flag: true
        }
    }
    componentDidUpdate(prevProps) {
        const { user } = this.props
        if (prevProps.user !== user) {
            this.setState({
                companyName: user[0].companyName,
                HRname: user[0].HRname,
                email: user[0].email,
                mobile: user[0].mobile,
                address: user[0].address,
                posts: user[0].posts,
                accountType: user[0].accountType,
                description: user[0].description
            })
        }
    }
    _onChange = (key, value) => this.setState({ [key]: value, flag: false })

    _update = (...data) => {
        this.setState({ flag: true })
        this.props.updateDispatch(data)
    }
    render() {
        const { companyName, email, mobile, HRname, address, description, flag } = this.state;
        return (
            <Form className='border p-3'>
                <Form.Row>
                    <Form.Group as={Col} controlId="CompanyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" value={companyName}
                            onChange={(text) => this._onChange('companyName', text.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="HRname">
                        <Form.Label >HR Name</Form.Label>
                        <Form.Control value={HRname}
                            onChange={(text) => this._onChange('HRname', text.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} disabled
                            onChange={(text) => this._onChange('email', text.target.value)}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group controlId="Mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" value={mobile}
                            onChange={(text) => this._onChange('mobile', text.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address} type="text"
                            onChange={(text) => this._onChange('address', text.target.value)}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} type="text"
                            onChange={(text) => this._onChange('description', text.target.value)}
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" disabled={flag && 'disabled'}
                    onClick={() => this._update(this.state, this.props.user[1][0])}
                >Update</Button>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateDispatch: (data) => dispatch(CompanyMiddleware.profileUpdate(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);