import React, { ReactNode, createContext, useState } from 'react';

interface ModalContextProps {
    isAddUserModalOpen: boolean ;
    isUpdateModalOpen: boolean ;
    isDeleteModalOpen: boolean ;
    toggleAddUserModal: () => void;
    toggleUpdateModal: () => void;
    toggleDeleteModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
    isAddUserModalOpen: false,
    isUpdateModalOpen: false,
    isDeleteModalOpen: false,
    toggleAddUserModal: () => {},
    toggleUpdateModal: () => {},
    toggleDeleteModal: () => {},
});

export const ModalProvider: React.FC <{ children: ReactNode }> = ({ children }) => {
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleAddUserModal = () => {
        setIsAddUserModalOpen(!isAddUserModalOpen);
    };

    const toggleUpdateModal = () => {
        setIsUpdateModalOpen(!isUpdateModalOpen);
    };

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };


    return (
        <ModalContext.Provider
            value={{
                isAddUserModalOpen,
                isUpdateModalOpen,
                isDeleteModalOpen,
                toggleAddUserModal,
                toggleUpdateModal,
                toggleDeleteModal,
            }}
        >
            {children }
        </ModalContext.Provider>
    );
};