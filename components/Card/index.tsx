import React from "react";
import { Card, Button } from "antd";
import { TCharacterInfo } from "../../utils/models/character";


export type TCardCharacter = {
  onClick: (id: string) => void;
  data: TCharacterInfo;
};
const { Meta } = Card;
const CardCharacter = ({
  onClick,
  data: { id, name, filmConnection },
}: TCardCharacter) => {
  return (
    <Card style={{
    margin:"7px"
    }}  hoverable>
      <Meta
        title={name}
      />
      <Button
      style={{
      background:"#ffc500",
      color:"#fff",
      marginTop:"10px"
      }
      }
        onClick={() => {
          onClick(id);
        }}
        
      
      >
        See details
      </Button>
    </Card>
  );
};
export default CardCharacter;