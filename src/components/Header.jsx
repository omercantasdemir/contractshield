// Üst çubuk: logo, uygulama adı ve prototip etiketi.

import { Layout, Button, Tag, Typography } from "antd";
import { SafetyCertificateFilled } from "@ant-design/icons";

export default function AppHeader({ onHome }) {
  return (
    <Layout.Header className="header">
      <Button type="text" className="brand" onClick={onHome} aria-label="Ana sayfa">
        <SafetyCertificateFilled className="brand-icon" />
        <span className="brand-name">ContractShield</span>
        <Typography.Text type="secondary" className="brand-sub">Sözleşme Kalkanı</Typography.Text>
      </Button>
      <Tag>LEE508 · Prototip</Tag>
    </Layout.Header>
  );
}
