import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectText, getTexts, saveText } from "../../features/textSlice";

import { BsFiles } from "react-icons/bs";

import "./sidebar.css";

const Sidebar = (props) => {
  const { setMode, openFiles, setOpenFiles } = props;

  const textItem = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const colseHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    console.log("sssss");
    dispatch(getTexts());
  }, []);

  useEffect(() => {
    console.log(textItem);
    if (textItem.text.title !== "") {
      if (openFiles.find((item) => item._id === textItem.text._id) === false) {
        setOpenFiles([...openFiles, textItem.text]);
      }
    }
  }, [textItem]);

  return (
    <div className="sidebar-container">
      {/* <ul>
        {list.map((item) => {
          return (
            <li
              key={item._id}
              onClick={() => {
                setText({ id: item._id, title: item.title, text: item.text });
                setMode("edit");
              }}
            >
              <Text h4>{item.title}</Text>
            </li>
          );
        })}
      </ul> */}
      <Modal open={visible} closeButton onClose={colseHandler}>
        <Modal.Header>
          <Text>create File</Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="file name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat>
            Close
          </Button>
          <Button
            auto
            onClick={() => {
              dispatch(saveText({ title: title, text: "" }));
              // setOpenFiles([...openFiles, textItem.text]);
              colseHandler();
            }}
          >
            create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="icon-lists">
        <ul>
          <li onClick={() => setOpen(!open)}>
            <BsFiles />
          </li>{" "}
          <li>
            <BsFiles />
          </li>{" "}
          <li>
            <BsFiles />
          </li>{" "}
          <li>
            <BsFiles />
          </li>{" "}
          <li>
            <BsFiles />
          </li>
        </ul>
      </div>
      {open ? (
        <div className="file-lists">
          <div>
            <Button auto light onClick={handler}>
              Create
            </Button>
          </div>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {textItem.texts.map((item) => {
                return (
                  <li
                    key={item._id}
                    onClick={() => {
                      // setStop(true);
                      // setText({ id: item._id, title: item.title, text: item.text });
                      // console.log("select !!");
                      setMode("edit");
                      dispatch(selectText(item));
                      setOpenFiles([...openFiles, item]);
                    }}
                  >
                    <Text h4>{item.title}</Text>
                  </li>
                );
              })}
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <ul>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <ul>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
                <li>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
