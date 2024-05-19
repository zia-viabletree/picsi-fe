import React from "react";
import { Row, Col } from "antd";
import { Button } from "../../components";
import { HOME_ROUTE } from "../../constants";
import { Images } from "../../theme";
import "./styles.scss";

const Error = () => {
  return (
    <section className="errorpage-wrapper">
      <Row>
        <Col xs={24} lg={12}>
          <div className="thumb-box">
            <img
              src={Images.ErrorThumbnail}
              className="thumb"
              alt="page not found"
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="content">
            <h2 className="gradient-text">
              We couldn't find what you were looking for.
            </h2>
            <p>
              Unfortunately the page you were looking for could not be found. It
              may be temporarily unavailable, moved or no longer exist.
            </p>
            <p>
              Check the URL you entered for any mistakes and try again.
              Alternatively, take a look around the rest of our site.
            </p>
            <button isLink link={HOME_ROUTE}>
              Back to home
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Error;
