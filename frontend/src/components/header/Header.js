import React, { useState } from "react";
import {
  Text,
  Container,
  Row,
  Modal,
  useModal,
  Button,
} from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiSunFill } from "react-icons/ri";

import "./Header.css";

const Header = (props) => {
  const { changeTheme } = props;
  const { setVisible, bindings } = useModal();
  return (
    <>
      <Row justify="space-between" align="center" css={{ p: "1rem" }}>
        <Text h2>Next Memo</Text>
        <div>
          <RiSunFill onClick={() => changeTheme()} />
          <AiOutlineMenu onClick={() => setVisible(true)} />
        </div>
      </Row>
      <Modal
        scroll
        closeButton
        blur
        fullScreen
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        // css={{ backgroundColor: "#1d1d1db0" }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
            purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Cras mattis consectetur
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button onClick={() => setVisible(false)}>Agree</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
