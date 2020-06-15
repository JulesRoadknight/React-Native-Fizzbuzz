import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import CheckNumberForm from '../CheckNumberForm';

describe('CheckNumberForm', () => {
  describe('clicking send', () => {
    const numberFieldText = '5';

    let sendHandler
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn();

      ({getByTestId} = render(<CheckNumberForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('numberField'), numberFieldText);
      fireEvent.press(getByTestId('submitNumber'));
    })

    it('clears the number field', () => {
      expect(getByTestId('numberField').props.value).toEqual('');
    })

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(numberFieldText);
    })
  })
})