import React from 'react';
import { Modal, Header, Image, Button } from "semantic-ui-react"

let image = 'https://picsum.photos/150/150?image='
const valor = () =>{
    return Math.floor(Math.random()*(599-100+1)+100)
}

const ModalComp = ({
    open,
    setOpen,
    name,
    info,
    mail,
    contact,
    id,
    address,
    country,
    company,
    handleDelete
}) => {
    return (
        <Modal 
        onClose={() => setOpen(false)} 
        onOpen={() => setOpen(true)} 
        open={open}>
            <Modal.Header>User Detail</Modal.Header>
            <Modal.Content image>
                <Image size="medium" src={image+valor()} warpped />
                <Modal.Description>
                    <Header>{name}</Header>
                    <p>{info}</p>
                    <p>{mail}</p>
                    <p>{contact}</p>
                    <p>{address}</p>
                    <p>{country}</p>
                    <p>{company}</p>
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