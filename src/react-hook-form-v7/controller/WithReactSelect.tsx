import Input from '@material-ui/core/Input';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

let renderCount = 0;

const WithReactSelect = () => {
  renderCount++;
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div>
      <div>render: {renderCount}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="firstName" control={control} defaultValue="" render={({ field }) => <Input {...field} />} />
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          )}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default WithReactSelect;
