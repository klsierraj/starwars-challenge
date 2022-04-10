import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { LoadingOutlined } from "@ant-design/icons";
import { getCharacters } from "../../graphql/query";
import { List, Spin } from "antd";
import CardCharacter from "../../components/Card";
import CharacterDetail from "../CharacterDetail";
import { TCharacterInfo } from "../../utils/models/character";



const routeCharacterId = "/";
const CharacterList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(getCharacters);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#94161C" }} spin />
  );

  const tableLoading = {
    spinning: loading,
    indicator: <Spin indicator={antIcon} />,
  };

  useEffect(() => {
    if (id && !isVisible) {
      setIsVisible(true);
    }
  }, [id]);

  return (
    <>
      <List
      
        loading={tableLoading}
    
        grid={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={data?.allPeople.people}
        renderItem={(item: TCharacterInfo) => (
          <List.Item>
            <CardCharacter
              onClick={(id: string) => {
                router.push({
                  pathname: routeCharacterId,
                  query: { id: id },
                });
              }}
              data={item}
            ></CardCharacter>
          </List.Item>
        )}
      />
      {id && (
        <CharacterDetail
          id={id}
          visible={isVisible}
          onCancel={() => {
            router.push(routeCharacterId);
          }}
        />
      )}
    </>
  );
};

export default CharacterList;
