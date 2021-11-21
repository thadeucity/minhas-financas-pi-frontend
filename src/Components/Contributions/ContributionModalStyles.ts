import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  form {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    b {
      font-size: 1.5rem;
    }

    > * + * {
      margin-top: 1rem;
    }
  }

  .modal__close_button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #000;
    opacity: 0.5;
  }
`;
