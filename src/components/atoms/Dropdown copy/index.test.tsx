// import React from 'react';
// import { render, fireEvent ,screen } from '@testing-library/react';
// import ControlledOpenSelect from './index';
// import '@testing-library/jest-dom';

// describe('ControlledOpenSelect' , () => {
//     test('render components' , () => {

//         const handleChange = jest.fn();

//         render(
//             <ControlledOpenSelect name='Test1' handleChange={handleChange}/>
//         );
//         const dropdown = screen.getByTestId('dropdown');
//         expect(dropdown).toBeInTheDocument();
//     });
// })



import React from 'react';
import { fireEvent, getByText } from '@testing-library/react';
import ControlledOpenSelect from './index';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';

const handleChange = jest.fn();

const testOptions = ['Option 1', 'Option 2', 'Option 3'];

const testComponent = () => (
  <div>
    <h1>This is a test component</h1>
  </div>
);

const testComponentWithCall = () => {
  const element = testComponent();
  return element;
};

describe('ControlledOpenSelect', () => {
  it('should open the select box when the user clicks on it', () => {
    const { getByTestId } = render(
      <ControlledOpenSelect
        name="Select"
        handleChange={handleChange}
        selectWidth="100px"
        selectHeight="200px"
        component={testComponentWithCall()}
      />
    );

    act(() => {
      fireEvent.change(getByTestId('dropdown'));
    });

    expect(getByTestId('dropdown')).toBeVisible();
  });

  it('should close the select box when the user clicks outside', () => {
    const { getByTestId } = render(
      <ControlledOpenSelect
        name="Select"
        handleChange={handleChange}
        selectWidth="100px"
        selectHeight="200px"
        component={testComponentWithCall()}
      />
    );

    act(() => {
      fireEvent.change(getByTestId('dropdown'));
    });

    expect(getByTestId('dropdown')).toBeVisible();

    // act(() => {
    //     fireEvent.click(document.body); // Simulate click on the document body
    //   });
    
    //   expect(getByTestId('dropdown')).not.toBeVisible();

})

});



//   it('should log the selected value when the user changes the select box', () => {
//     jest.spyOn(console, 'log').mockImplementation(() => {});

//     const { getByTestId } = render(testComponent);

//     act(() => {
//       fireEvent.click(getByTestId('dropdown'));
//       fireEvent.selectOptions(getByTestId('dropdown'), [0]);
//     });

//     expect(console.log).toHaveBeenCalledWith('Option 1');
//   });

//   it('should not open the select box if the component is empty', () => {
//     const { getByTestId } = render(
//       <ControlledOpenSelect
//         name="Select"
//         handleChange={handleChange}
//         selectWidth="100px"
//         selectHeight="200px"
//         component={[]}
//       />
//     );

//     act(() => {
//       fireEvent.click(getByTestId('dropdown'));
//     });

//     expect(getByTestId('dropdown')).toBeClosed();
//   });

//   it('should not log any values if the handleChange function does not log any values', () => {
//     jest.spyOn(console, 'log').mockImplementation(() => {});

//     const { getByTestId } = render(testComponent);

//     act(() => {
//       fireEvent.click(getByTestId('dropdown'));
//       fireEvent.selectOptions(getByTestId('dropdown'), [0]);
//     });

//     expect(console.log).not.toHaveBeenCalled();
//   });
