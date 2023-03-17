import { Button, Layout, Space, Typography } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle,
  sectionStyle,
} from "./style";
import { useContext } from "react";
import { Context } from "../../context";

interface IDetailsProps {
  testId?: string;
}

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export function Details({ testId = "" }: IDetailsProps): JSX.Element {
  const { name } = useParams();
  const { name: nameFromStore, linkedin, github } = useContext(Context);
  console.log(name, nameFromStore, linkedin, github);

  return (
    <Space
      data-testid={`details-${testId}`}
      direction="vertical"
      style={sectionStyle}
    >
      <Layout style={layoutStyle}>
        <Header
          style={headerStyle}
          data-testid={`details-header-title-${testId}`}
        >
          Hello, my name is <strong>{name ?? nameFromStore}</strong>
        </Header>
        <Content style={contentStyle}>
          <Title data-testid={`details-content-heading-${testId}`}>
            My history
          </Title>
          <Space direction="vertical" size="middle">
            <Typography data-testid={`details-content-text-${testId}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            </Typography>
            <Space size="large">
              <Button
                type="primary"
                size="large"
                htmlType="button"
                href={github ?? ""}
                data-testid={`details-button-github-${testId}`}
              >
                Github
              </Button>
              <Button
                size="large"
                htmlType="button"
                href={linkedin ?? ""}
                data-testid={`details-button-linkedin-${testId}`}
              >
                Linkedin
              </Button>
            </Space>
          </Space>
        </Content>
        <Footer style={footerStyle} data-testid={`details-footer-${testId}`}>
          Made with <HeartTwoTone /> by Anderson Corrêa
        </Footer>
      </Layout>
    </Space>
  );
}
