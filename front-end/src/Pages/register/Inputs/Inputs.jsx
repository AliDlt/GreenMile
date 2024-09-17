import { DivFormInput, FormInput, LableForm } from "../RegisterElement";
import React from "react";
function Inputs(props) {
  const { lable, name, type, change, value, required } = props;
  const check = (
    <FormInput
      onChange={change}
      required={required}
      value={value}
      type={type}
      accept="image/png, image/gif, image/jpeg"
      id={name}
      name={name}
    />
  );

  return (
    <DivFormInput>
      <LableForm htmlFor={name}>{lable} :</LableForm>

      {type === "file" ? (
        check
      ) : (
        <FormInput
          onChange={change}
          required={required}
          value={value}
          type={type}
          id={name}
          name={name}
        />
      )}
    </DivFormInput>
  );
}

export default Inputs;
