import React, { useEffect } from "react"
import CustomButton from '../../../components/button'
import Input from '../../../components/input';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Modal from '../../../components/modal';
import { storageConfiguration } from '../configurations/storage';

interface InfoItem {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface StorageProps {
    infos: InfoItem[];
    modalIsVisible: boolean;
    infoLoading: boolean;
    showModal: () => void;
    hideModal: () => void;
    getInfo: () => void;
}

export const Storage = (props: StorageProps) => {
    const { 
        infos, 
        modalIsVisible,
        infoLoading,
        showModal, 
        hideModal,
        getInfo
    } = props;

    console.log(infoLoading);

    useEffect(() => {
        getInfo();
    }, [getInfo]);
    
    return (
        <StorageContainer>
            <span>{storageConfiguration.pageName}</span>
            <Input></Input>
            <div>
                {infos.length && infos[0].name}
            </div>
            <CustomButton 
                type="primary" 
                onClick = {showModal}
            >
                {storageConfiguration.buttonText}
            </CustomButton>
            <Modal 
                title={storageConfiguration.modalName} 
                visible={modalIsVisible} 
                onOk={hideModal} 
                onCancel={hideModal}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </StorageContainer>
    );
};

const StorageContainer = styled.div`
    display: grid;
`;