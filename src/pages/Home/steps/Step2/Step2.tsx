import { useState } from "react";
import { Button, Input } from "../../../../components";
import makeRequest from "../../../../utils/AxiosClient";
import Swal from "sweetalert2";
import validator from "validator";
import "./styles.scss";

export const Step2 = ({
  handleNextStep,
}: {
  handleNextStep: (v: number) => void;
}) => {
  const [mailVerified, setMailVerified] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const sendCode = async () => {
    try {
      if (!code) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid code.",
        });
        return;
      }
      const response = await makeRequest<Array<{ [key: string]: string }>>({
        method: "get",
        url: "/codes",
      });

      const existingCodes = response.data.map((codeObj) => {
        const { id, ...codeData } = codeObj as { id: string };
        return Object.values(codeData).join("");
      });

      if (!existingCodes.includes(code)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Code is not valid!",
        });
      } else {
        handleNextStep(2);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendEmail = async () => {
    try {
      if (!validator.isEmail(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid email address.",
        });
        return;
      }

      const response = await makeRequest<Array<{ [key: string]: string }>>({
        method: "get",
        url: "/emails",
      });

      const existingEmails = response.data.map((emailObj) => {
        const { id, ...emailData } = emailObj as { id: string };
        return Object.values(emailData).join("");
      });

      if (existingEmails.includes(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email already registered. Please use a different email.",
        });
      } else {
        setMailVerified(true);
        Swal.fire({
          icon: "success",
          title: "Cool",
          text: "Your code is 12345 😁.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="step2-wrapper">
      <div className="step2-wrapper__title">
        <h2>What’s your email address?</h2>
      </div>
      <div className="step2-wrapper__content">
        <div>We’ll send you a verification code via email.</div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <Input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={!!mailVerified}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
      </div>

      {mailVerified ? (
        <>
          <div className="step2-wrapper__title">
            <h2>Please enter your code.</h2>
          </div>
          <div className="step2-wrapper__content">
            <div>Enter the six-digit code you just received via email.</div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            <Input
              style={{ textAlign: "center" }}
              placeholder="XXXXX"
              maxLength={5}
              value={code}
              onChange={(ev) => setCode(ev.target.value)}
            />
          </div>
          <div className="center-items">
            <Button content="send" onClick={() => sendCode()} />
          </div>
        </>
      ) : (
        <div className="center-items">
          <Button
            content="send"
            onClick={sendEmail}
            disabled={!email.length && !validator.isEmail(email)}
          />
        </div>
      )}
    </div>
  );
};
