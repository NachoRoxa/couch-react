import React from 'react';
import { Select, Form } from 'antd';

function App () {
  return (
    <div className='App'>
      <Form>
        <Select placeholder='Test of Fuck'>
          <optgroup label='Jobs' key='2'>
            <option value='Engineer'>Engineer</option>
            <option value='Dev'>Dev</option>
            <option value='Tech'>Tech</option>
          </optgroup>
          <optgroup label='Somes' key='4'>
            <option value='Something'>Something</option>
            <option value='Someone'>Someone</option>
            <option value='Someshit'>SomeShit</option>
          </optgroup>
        </Select>
        <Select placeholder='Test of Fuck'>
          <optgroup label='Jobs' key='2'>
            <option value='Engineer'>Engineer</option>
            <option value='Dev'>Dev</option>
            <option value='Tech'>Tech</option>
          </optgroup>
          <optgroup label='Somes' key='4'>
            <option value='Something'>Something</option>
            <option value='Someone'>Someone</option>
            <option value='Someshit'>SomeShit</option>
          </optgroup>
        </Select>
      </Form>
    </div>
  );
}

export default App;
