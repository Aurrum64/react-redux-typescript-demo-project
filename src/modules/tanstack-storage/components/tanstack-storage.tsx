import React, { useState } from "react";
import CustomButton from "../../../components/button";
import Input from "../../../components/input";
import "antd/dist/antd.css";
import styled from "styled-components";
import Modal from "../../../components/modal";
import { storageConfiguration } from "../configurations/tanstack-storage";
import { RestService } from "../../../services/rest-service";
import { useGetInfoQuery } from "../api/get-info.query";

export interface InfoItem {
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
  restService: RestService;
}

export const Storage = ({ restService }: StorageProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { data: infos, isLoading: infoIsLoading } =
    useGetInfoQuery(restService);

  console.log("infoIsLoading", infoIsLoading);

  return (
    <StorageContainer>
      <span>{storageConfiguration.pageName}</span>
      <Input></Input>
      <div>{infos?.length && infos?.[0].name}</div>
      <CustomButton type="primary" onClick={() => setIsVisible(true)}>
        {storageConfiguration.buttonText}
      </CustomButton>
      <Modal
        title={storageConfiguration.modalName}
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
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
