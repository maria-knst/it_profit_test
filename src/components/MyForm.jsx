import React, {useState} from 'react';
import axios from "axios";
import MyInput from "./MyInput";
import MyTextarea from "./MyTextarea";

const MyForm = (props) => {

    const [fields, setFields] = useState({
        fullName: '',
        eMail: '',
        phoneNumber: '',
        birthdayDate: '',
        message: ''
    })
    const [validateFields, setValidateFields] = useState({
        v_fullName: false,
        v_eMail: false,
        v_phoneNumber: false,
        v_birthdayDate: false,
        v_message: false
    })

    const validateFormFields = (fields_) => {
        if(!/^[A-Za-z]{3,30}\s[A-Za-z]{3,30}$/.test(fields_.fullName)){
            setValidateFields({...validateFields, v_fullName: true});
            return false;
        }else if(!/^[\w-]+@[a-z]+\.[a-z]+$/.test(fields_.eMail)){
            setValidateFields({...validateFields, v_eMail: true});
            return false;
        }else if(!/^\+7\d{7,10}$/.test(fields_.phoneNumber)) {
            setValidateFields({...validateFields, v_phoneNumber: true});
            return false;
        }
        else if(! /^\d{4}-\d{2}-\d{2}$/.test(fields_.birthdayDate)) {
            setValidateFields({...validateFields, v_birthdayDate: true});
            return false;
        }else if(!(fields_.message.length >= 10 && fields_.message.length <= 300)){
            setValidateFields({...validateFields, v_message: true});
            return false;
        }
        setValidateFields({v_fullName: false, v_message: false, v_eMail: false, v_birthdayDate: false, v_phoneNumber: false})
        return true;
    }

    function fetchRequest(event) {
        event.preventDefault();
        let result = [];
        axios.get('./server.json')
            .then((res) => {
                result = res;
                if(validateFormFields(fields)) {
                    props.answer({title: res.data[0].title, message: res.data[0].message});
                }else {
                    props.answer({title: result.data[1].title, message: result.data[1].message});
                    throw new Error(' Fields incorrect');
                }

            })
            .catch((error) => {
                props.answer({title: result.data[1].title, message: result.data[1].message + ' ' + error});
            });
    }

    return (
        <form className="MyForm">
            <MyInput divVisible={validateFields.v_fullName} className="MyFormInnerInput" value={fields.fullName}   onChange={e => setFields({...fields, fullName: e.target.value})}     type="text"  placeholder="Full Name"          divmessage="Name" style={{textTransform: 'uppercase'}}/>
            <MyInput divVisible={validateFields.v_eMail} className="MyFormInnerInput" value={fields.eMail}        onChange={e => setFields({...fields, eMail: e.target.value})}        type="text"  placeholder="E-mail"             divmessage="E-mail"/>
            <MyInput divVisible={validateFields.v_phoneNumber} className="MyFormInnerInput" value={fields.phoneNumber}  onChange={e => setFields({...fields, phoneNumber: e.target.value})}  type="tel"   placeholder="+7 (987) 654-32-10" divmessage="Phone number"/>
            <MyInput divVisible={validateFields.v_birthdayDate} className="MyFormInnerInput" value={fields.birthdayDate} onChange={e => setFields({...fields, birthdayDate: e.target.value})} type="date"  placeholder="Your Birthday"      divmessage="Date"/>
            <MyTextarea divVisible={validateFields.v_message} className="MyFormInnerTextArea" value={fields.message} onChange={e => setFields({...fields, message: e.target.value})}  style={{height: '200px' }} name="message" id="MyFormMessage" placeholder="Message" divmessage="Message" />

            <button className="MyFormButton" onClick={fetchRequest}> Send Me</button>
        </form>
    );
};

export default MyForm;