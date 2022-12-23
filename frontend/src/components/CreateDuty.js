import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as actions from "../actions";
import { Row, Card } from "antd";
import { useForm } from "react-hook-form";

export default function CreateDuty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [dutyHook, setDutyHook] = useState({ name: "", id: "" });

  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: useMemo(() => {
      return dutyHook.name || "";
    }, [dutyHook]),
  });

  useEffect(() => {
    reset(dutyHook);
  }, [dutyHook]);

  useEffect(() => {
    if (id) {
      actions.getDuty(id).then((response)=>{
        setEditing(true);
        setDutyHook((prevState) => ({
          ...prevState,
          name: response.name,
          id: response.id,
        }));

      });
    }
  }, [id]);

  const onSubmit = async () => {
    const dataDuty = { name: dutyHook.name };
    if (editing) {
      await actions.updateDuty(dutyHook.id, dataDuty);
    } else {
      await actions.createDuty(dataDuty);
    }
    navigate("/");
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDutyHook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const cardTitle = editing ? "Update Duty" : "Create a Duty";

  return (
    <Row gutter={8}>
      <Card size="small" title={cardTitle} className="app-card app-mar">
        <form onSubmit={handleSubmit(onSubmit)} onChange={onInputChange}>
          <input
            className="app-input"
            {...register("name", { required: "Please enter a name." })}
          />
          <input className="app-submit" type="submit" value="save" />
        </form>
      </Card>
    </Row>
  );
}
