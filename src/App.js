import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Popover,
  Divider
} from "@material-ui/core";
import styled from "styled-components";
import "./styles.css";

const Container = styled.div`
  display: grid;
  grid-auto-columns: 0.5fr 1fr;
  gap: 20px;
  padding: 20px;
`;
const Card = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
`;

const App = () => {
  const groupList = [
    { name: "group1" },
    { name: "group2" },
    { name: "group3" },
    { name: "group4" },
    { name: "group5" }
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedGroup(event.currentTarget.dataset.group);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedGroup("");
  };

  return (
    <Container>
      <Card style={{ gridColumn: "1/2" }}>
        <div
          style={{
            backgroundColor: "#999999",
            padding: "0 10px",
            height: "48px",
            fontSize: "large",
            fontWeight: "bold",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
          }}
        >
          Group List
        </div>
        <List>
          {groupList.map((list) => (
            <>
              <ListItem
                button
                onClick={handleClick}
                data-group={list.name}
                key={list.name}
                selected={list.name === selectedGroup ? true : false}
                alignItems="flex-start"
              >
                <ListItemText primary={list.name} />
              </ListItem>
              <Divider component="li" />
            </>
          ))}
        </List>
      </Card>
      <Card style={{ gridColumn: "2/3" }}>test</Card>
      <Popover
        anchorOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Anonymization" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Activity Report" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Occurrence Table" />
          </ListItem>
        </List>
      </Popover>
    </Container>
  );
};

export default App;
