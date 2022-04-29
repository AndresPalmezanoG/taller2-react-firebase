import React from 'react';
import { Modal, Header, Image, Button } from "semantic-ui-react"

const ModalComp = ({
    open,
    setOpen,
    img,
    name,
    info,
    mail,
    contact,
    id,
    address,
    country,
    handleDelete
}) => {
    return (
        <Modal 
        onClose={() => setOpen(false)} 
        onOpen={() => setOpen(true)} 
        open={open}>
            <Modal.Header>User Detail</Modal.Header>
            <Modal.Content image>
                <Image size="medium" src={img} warpped />
                <Modal.Description>
                    <Header>{name}</Header>
                    <p>{info}</p>
                    <p>{mail}</p>
                    <p>{contact}</p>
                    <p>{address}</p>
                    <p>{country}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black"
                    onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color="red"
                    content="Delete"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => handleDelete(id)} />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalComp