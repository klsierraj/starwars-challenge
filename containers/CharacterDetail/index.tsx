import React, { useState } from "react";
import { Typography, Modal, Row, Col, Tag, Table, Spin } from "antd";
const { Title } = Typography;
import { useQuery } from "@apollo/client";
import { LoadingOutlined } from "@ant-design/icons";
import { getCharacterDetail } from "../../graphql/query";

export type TCharacterDetail = {
  onCancel: () => void;
  id: any;
  visible: boolean;
};

const CharacterDetail = ({ visible, id, onCancel }: TCharacterDetail) => {

  const { loading, data } = useQuery(getCharacterDetail, {
    variables: { id: id },
  });

  const handleOk = () => {
    onCancel();
  };
  const handleCancel = () => {
    onCancel();
  };

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#00176F" }} spin />
  );

  const tableLoading = {
    spinning: loading,
    indicator: <Spin indicator={antIcon} />,
  };
  /// Modelo de las columnas para la tabla
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "data.filmConnection.films.title",
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "data.filmConnection.films.director",
    },
    {
      title: "Planets",
      dataIndex: "planets",
      key: "data.filmConnection.films.planetConnection.planets.name",
      /// Establezco el elemento tag para la visualización de los planetas
      render: (name: any) => (
        <>
          {name.map((name: any) => {
            return (
              <Tag
                key={name}
                style={{ borderRadius: "8px" }}
                color="black"
                
               
              >
                {name}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <Modal
    centered={true}
    width={800}
    cancelButtonProps={{
      style: { display: "none" },
    }}
    okButtonProps={{
      style: {
        background: "#ffc500",
        color:"#000",
        borderWidth: "0px",
        borderRadius: "5px",
        width: "90px",
        fontSize: "15px",
        height: "35px",
      },
    }}
    title={<Title >{data?.person.name}</Title>}
    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
  >

    <Row  gutter={20}>
      <Col span={6}>
        <p>
          Specie:{" "}
          {data?.person?.species?.name ? data.person.species.name : " Human"}
        </p>
        <p>Birth Year: {data?.person.birthYear}</p>
      </Col>
      <Col span={7}>
        <p>Planet: {" " + data?.person.homeworld.name}</p>
        <p>Gender: {data?.person.gender}</p>
      </Col>
      <Col span={5}>
        <p>Height: {data?.person.height}</p>
        <p>Mass: {data?.person.mass}</p>
      </Col>
      <Col span={6}>
        <p>Hair Color: {data?.person.hairColor}</p>
        <p>Skin Color: {data?.person.skinColor}</p>
      </Col>
    </Row>

    <div>
      <Title>
        Total Movies: {data?.person.filmConnection.totalCount}{" "}
      </Title>
      <Table
        key={id}
        bordered={true}
        loading={tableLoading}
        columns={columns}
        pagination={false}
        dataSource={data?.person.filmConnection?.films.map((film: any) => ({
          key: film.title,
          title: film.title,
          director: film.director,
          planets: film.planetConnection.planets.map(
            (planet: any) => planet.name
          ),
        }))}
      ></Table>
    </div>
  </Modal>
  );
};;

export default CharacterDetail;
