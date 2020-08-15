import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export const LightboxContext = React.createContext({});

// const CloseModalButton = () => (
//   <Button
//     className="modalCloseBtn"
//     variant="fab"
//     onClick={() => closeModal()}
//     icon={<i className="flaticon-plus-symbol" />}
//   />
// );

export const LightboxProvider = ({ children }) => {
  const [login, setLogin] = React.useState('connexion');

  const [open, setOpen] = React.useState(false);

  function openModal() {
    setOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <LightboxContext.Provider
      value={{
        login,
        handleLightbox: (existantArg = 'signup') => {
          openModal();
          setLogin(existantArg);
          trackCustomEvent({
            category: 'funnel',
            action: 'step1_message1',
            label: 'Funnel - Etape 1 - Message'
          });
        },
        handleCloseModal: closeModal,
        afterOpenModal: afterOpenModal,
        open: open
        // handleLightbox: (existantArg = 'signup') => {
        //   setLogin(existantArg);
        //   trackCustomEvent({
        //     category: 'funnel',
        //     action: 'step1_message1',
        //     label: 'Funnel - Etape 1 - Message'
        //   });
        //   openModal({
        //     config: {
        //       className: 'lightbox',
        //       disableDragging: false,
        //       width: '100%',
        //       height: '100%'
        //       // animationFrom: { transform: 'translateY(100px)' },
        //       // animationTo: { transform: 'translateY(0)' }, //
        //       // transition: {
        //       //   mass: 1,
        //       //   tension: 180,
        //       //   friction: 26
        //       // }
        //     },
        //     component: Lightbox,
        //     componentProps: {},
        //     closeComponent: CloseModalButton,
        //     closeOnClickOutside: false
        //   });
        // }
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};
