/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Button } from '../Button';
import { Input } from '../Inputs';
import { Portal } from '../Portal/Portal';
import { Container } from './ContributionModalStyles';

interface ContributionModalProps {
  isWithdrawal?: boolean;
  isSending?: boolean;
  onClose?: () => void;
  onSubmit: (amount: number) => void;
}

export const ContributionModal: React.FC<ContributionModalProps> = ({
  isWithdrawal = false,
  isSending = false,
  onClose,
  onSubmit,
}) => {
  const [value, setValue] = React.useState('');

  return (
    <Portal selector="__MODAL_PORTAL__">
      <Container>
        <button
          className="modal__close_button"
          type="button"
          onClick={onClose}
        />
        <form>
          <b>{isWithdrawal ? 'Remover:' : 'Adicionar:'}</b>
          <Input
            name="value"
            type="text"
            label="Valor"
            onChange={event => {
              const { value: tVal } = event.target;
              event.target.value = tVal
                .replace(/[^\d]/g, '')
                .replace(/(\d+)(\d\d)$/g, '$1,$2');

              setValue(event.target.value.replace(/[^\d]/g, ''));
            }}
          />

          <Button
            isLoading={isSending}
            type="button"
            loadingText="Enviando ..."
            onClick={() => onSubmit(Number(value))}
          >
            Confirmar
          </Button>
        </form>
      </Container>
    </Portal>
  );
};
