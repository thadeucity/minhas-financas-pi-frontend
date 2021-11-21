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
            type="number"
            label="Valor"
            onChange={e => setValue(e.target.value)}
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
