import React, { useState } from "react";
import "./styles.scss";
import {
  CommonModal,
  CommonTextField,
  Effects,
  FaceSwapping,
  ImageUploader,
  MultiPaidEffects,
  PaidEffects,
  SwapLoading,
  SwapTab,
} from "../../../components";
import { Checkbox, Col, Divider, Form, Popover, Row, Slider } from "antd";
import {
  CommonButton,
  CommonCheckbox,
  CommonPopover,
} from "../../../components";
import { Images } from "../../../theme";
import { freeEffects, paidEffects } from "../../../constants";

const Home = () => {
  const [active, setActive] = useState("1");
  const [isShrink, setIsShrink] = useState(false);
  const [result, setResult] = useState(null);
  const [login, setLogin] = useState(true);

  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
    setResult(null);
    setIsShrink(true);

    setTimeout(() => {
      setIsShrink(false);
      setResult(Images.dummyResult);
    }, 10000);
  };

  return (
    <section className="home-wrapper">
      <Form onFinish={onFinish}>
        <SwapTab setActive={setActive} active={active} />
        {active === "1" ? (
          <FaceSwapping isShrink={isShrink} result={result} />
        ) : (
          <MultiPaidEffects isShrink={isShrink} result={result} />
        )}
        <Effects />
        <Divider />
        <PaidEffects />
      </Form>
      <CommonModal isModalVisible={login} setIsModalVisible={setLogin}>
        <CommonTextField
          textAlign={"center"}
          fontSize={"28px"}
          lineHeight={"38px"}
          className={"theme-text"}
          fontWeight={700}
          text={"Face Swapping Feature Access Requires Discord Account Login"}
        />
        <CommonTextField
          textAlign={"center"}
          mt={"20px"}
          mb={"40px"}
          fontSize={"16px"}
          fontWeight={500}
          text={
            "To enjoy our face swapping features, please log in using your Discord account to access any of our features"
          }
        />
        <CommonButton
          icon={<img src={Images.discordIcon} />}
          topClass={"discord-btn"}
          text={"Join Us"}
        />
      </CommonModal>
    </section>
  );
};

export default Home;
