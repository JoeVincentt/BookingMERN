import React, { Component } from "react";
import {} from "react-router-dom";
import Modal from "react-materialize/lib/Modal";
import { Button, Input, Container, Col } from "react-materialize";
import Row from "react-materialize/lib/Row";

class Events extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <Col s={12} m={8} l={6} offset="l3 m4" className="center-align">
            <p>Share Your Own Events</p>
            <Modal
              actions={
                <>
                  <Button style={{ margin: "5px" }}>Submit</Button>
                  <Button style={{ margin: "5px" }} className="modal-close">
                    Close
                  </Button>
                </>
              }
              header="{this.props.title}"
              fixedFooter
              trigger={<Button>Add Event</Button>}
            >
              <Row>
                <Input placeholder="Placeholder" s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input
                  s={12}
                  label="disabled"
                  defaultValue="I am not editable"
                  disabled
                />
                <Input type="password" label="password" s={12} />
                <Input type="email" label="Email" s={12} />
              </Row>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
