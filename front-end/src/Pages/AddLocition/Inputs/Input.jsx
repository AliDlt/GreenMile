import React from 'react';
import { FormItem, InputForm, LableInputForm } from '../AddLocitionElement';

function Input(props) {
    const {type , value , lable,name,changeValue} = props
    return ( 

        <FormItem>
        <LableInputForm htmlFor={name} > {lable} : </LableInputForm>
        <InputForm name={name} id={name} value={value} type= {type} onChange={changeValue}  />
        </FormItem>
     );
}

export default Input;