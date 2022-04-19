import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import "./stepper.css";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#857BE2"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#857BE2"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#BCC2C6",
    borderWidth: 2
  }
}));

const QontoStepIconRoot = styled("div")(
  ({ theme, ownerState }) => ({
    color: "#E9EBEC",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#857BE2"
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#857BE2",
      zIndex: 1,
      fontSize: 18
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    }
  })
);

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["Paso 1", "Paso 2", "Paso 3"];

export default function CustomStepper() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
