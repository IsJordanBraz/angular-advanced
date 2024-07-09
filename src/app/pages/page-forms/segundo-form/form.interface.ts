export interface MyFormJson {
  description: string;
  controls: MyFormControlsValue[];
}

export interface MyFormSegundo {
  description: string;
  controls: MyFormControls;
}

export interface MyFormControls {
  firstName: MyFormControlsValue;
  lastName: MyFormControlsValue;
}

export interface MyFormControlsValue {
  controlType: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  validators: MyFormControlValidators;
}

export interface MyFormControlValidators {
  required?: boolean;
  minLength?: number;
}
