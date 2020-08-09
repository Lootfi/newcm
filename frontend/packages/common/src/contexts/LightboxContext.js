import React from 'react';
import Button from '../../../common/src/components/Button';
import '@redq/reuse-modal/es/index.css';
import { openModal, closeModal } from '@redq/reuse-modal';
import Lightbox from '../../../common/src/components/Lightbox';

export const LightboxContext = React.createContext({});

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

export const LightboxProvider = ({ children }) => {
  return (
    <LightboxContext.Provider
      value={{
        handleLightbox: () => {
          openModal({
            config: {
              className: 'lightbox',
              disableDragging: false,
              width: '100%',
              height: '100%',
              animationFrom: { transform: 'translateY(100px)' },
              animationTo: { transform: 'translateY(0)' }, //
              transition: {
                mass: 1,
                tension: 180,
                friction: 26
              }
            },
            component: Lightbox,
            componentProps: {},
            closeComponent: CloseModalButton,
            closeOnClickOutside: false
          });
        }
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};
