import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { Button, Input } from "../../../../components";
import Swal from "sweetalert2";
import { LocalStorageService } from "../../../../services";
import "./styles.scss";

interface IRegisterForm {
  name: string;
  birthday: string;
  acceptedTerms: boolean;
}

export const Step3 = ({
  handleNextStep,
}: {
  handleNextStep: (v: number) => void;
}) => {
  const navigate = useNavigate();
  const [isOlderThan18, setIsOlderThan18] = useState(true);
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    name: "",
    birthday: "",
    acceptedTerms: false,
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredDate = event.target.value;

    setRegisterForm({
      ...registerForm,
      [event.target.name]: enteredDate,
    });

    if (!/\d{2}\/\d{2}\/\d{4}/.test(enteredDate)) return;

    const [day, month, year] = enteredDate.split("/").map(Number);

    const today = new Date();
    const userBirthDate = new Date(year, month - 1, day);
    const age = today.getFullYear() - userBirthDate.getFullYear();

    if (age < 18) {
      setIsOlderThan18(false);
      return;
    }
    setIsOlderThan18(true);
  };

  const validateFields = () => {
    const { acceptedTerms, birthday, name } = registerForm;

    if (!!acceptedTerms && !!birthday.trim().length && !!name.trim().length) {
      navigate("/activities");
      LocalStorageService.getInstance().setItem<string>("lastSeenStep", "4");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    }
  };

  return (
    <div className="step3-wrapper">
      <div className="step3-wrapper__title">
        <h2>What’s your name?</h2>
      </div>
      <div className="step3-wrapper__content">
        <div>Please enter your first and last name.</div>
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
          value={registerForm.name}
          name="name"
          onChange={(e) =>
            setRegisterForm({
              ...registerForm,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      <div className="step3-wrapper__title">
        <h2>What’s your birthday?</h2>
      </div>
      <div className="step3-wrapper__content">
        <div>You must be 18 or older to continue.</div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "30px",
          marginBottom: "40px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputMask
          mask="99/99/9999"
          placeholder="dd/mm/yyyy"
          value={registerForm.birthday}
          name="birthday"
          onChange={handleDateChange}
          style={{
            borderRadius: " 10px",
            backgroundColor: "#F2F2F2",
            color: "#000",
            border: "1px solid transparent",
            width: "100%",
            padding: ".8rem",
            fontSize: " 18px",
            textAlign: "center",
          }}
        />
        {!isOlderThan18 && (
          <p style={{ color: "red" }}>Error, you must be older than 18!</p>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="termsOfService"
          name="acceptedTerms"
          value={String(registerForm.acceptedTerms)}
          onChange={(e) =>
            setRegisterForm({
              ...registerForm,
              [e.target.name]: e.target.checked,
            })
          }
        />
        <label htmlFor="termsOfService">I agree the Terms of Service.</label>
      </div>
      {!!registerForm.acceptedTerms && (
        <div style={{ marginTop: "40px" }}>
          <Button content="complete" onClick={validateFields} />
        </div>
      )}
    </div>
  );
};
