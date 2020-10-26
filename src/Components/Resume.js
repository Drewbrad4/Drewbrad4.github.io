import React, { useState } from 'react';
import { Button, Modal} from 'reactstrap';
import ResumePDF from "../Assets/Drew Bradford Resume.pdf";
import Fade from 'react-reveal/Fade';


const ModalExample = (props) => {
  const {
    resumeButton
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Fade bottom>
            <Button id="resumeButton" color="info" onClick={toggle}>Resume</Button>
        </Fade>
        <Modal isOpen={modal} toggle={toggle} className={resumeButton}>
            <embed src={ResumePDF} width="1000px" height="1000px" type="application/pdf" frameborder="0"></embed> 
        </Modal>
    </div>
  );
}

export default ModalExample;