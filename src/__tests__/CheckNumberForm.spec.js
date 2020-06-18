import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import CheckNumberForm from '../CheckNumberForm';

describe('CheckNumberForm', () => {
  describe('clicking send', () => {

    fizzbuzzChecker = (number) => {
      if (number % 15 == 0) {
        return 'Fizzbuzz'
      } else if (number % 3 == 0) {
        return 'Fizz'
      } else if(number % 5 == 0) {
        return 'Buzz'
      } else {
        return number
      }
    }

    let sendHandler
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn();

      ({getByTestId} = render(<CheckNumberForm onSend={sendHandler} />));
    })

    it('clears the number field', () => {
      const numberFieldText = '4';
      fireEvent.changeText(getByTestId('numberField'), numberFieldText);
      fireEvent.press(getByTestId('submitNumber'));
      expect(getByTestId('numberField').props.value).toEqual('');
    })

    it('calls the send handler', () => {
      const numberFieldText = '4';
      fireEvent.changeText(getByTestId('numberField'), numberFieldText);
      fireEvent.press(getByTestId('submitNumber'));
      expect(sendHandler).toHaveBeenCalledWith(numberFieldText);
    })

    it('1 returns 1', () => {
      const numberFieldText = '1';
      expect(fizzbuzzChecker(numberFieldText)).toEqual('1');
    })

    it('3 returns fizz', () => {
      const numberFieldText = '3';
      expect(fizzbuzzChecker(numberFieldText)).toEqual('Fizz');
    })

    it('5 returns buzz', () => {
      const numberFieldText = '5';
      expect(fizzbuzzChecker(numberFieldText)).toEqual('Buzz');
    })

    it('15 returns Fizzbuzz', () => {
      const numberFieldText = '15';
      expect(fizzbuzzChecker(numberFieldText)).toEqual('Fizzbuzz');
    })
  })
})