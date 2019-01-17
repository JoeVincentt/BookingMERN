import React, { Component } from "react";
import {} from "react-router-dom";
import Modal from "react-materialize/lib/Modal";
import { Button, Input } from "react-materialize";
import Row from "react-materialize/lib/Row";

class Events extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12  m6 center">
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
              trigger={<Button>MODAL WITH FIXED FOOTER</Button>}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
