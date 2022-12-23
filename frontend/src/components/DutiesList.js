import React, { useEffect, useState } from "react";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import { Row, Card, Button, Empty } from "antd";
import { EditOutlined } from "@ant-design/icons";

export default function DutiesList() {
  const [duties, setDuties] = useState([]);

  const getToDoList = () => {
    actions
      .getDuties()
      .then((response) => {
        setDuties(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDutyItem = (dutyId) => {
    actions
      .deleteDuty(dutyId)
      .then((response) => {
        console.log(response);
        getToDoList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getToDoList();
  }, []);//setDuties
console.log(duties)
console.log(duties.length)
  return (
    <Row gutter={16}>
      {duties.length > 0 ? duties.map((duties) => (
        <Card
          key={duties.id}
          size="small"
          title="Item"
          extra={
            <Link to={"/edit/" + duties.id} className="btn btn-secondary">
              <EditOutlined className="ant-icons" />
            </Link>
          }
          className="app-card"
        >
          <p>{duties.name}</p>
          <Button
            type="primary"
            danger
            onClick={() => deleteDutyItem(duties.id)}
          >
            Delete
          </Button>
        </Card>
      ))
    : <Empty className="app-mar" />
    }
    </Row>
  );
}
