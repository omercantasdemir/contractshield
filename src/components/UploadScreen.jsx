// Yükleme ekranı: sözleşme türü seçimi ve PDF/DOCX yükleme alanı.
// Dosya tarayıcıda tutulur; beforeUpload false döndüğü için hiçbir sunucuya gönderilmez.

import { useState } from "react";
import { Card, Form, Select, Upload, Button, Alert, Typography, Row, Col, Space } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { LABELS } from "../labels.js";
import { RiskIcon } from "./RiskTag.jsx";

const { Title, Paragraph, Text } = Typography;

// Prototip şu an yalnızca yazılım geliştirici iş sözleşmesini kapsar.
const CONTRACT_TYPES = [
  { value: "is", label: "İş sözleşmesi (yazılım geliştirici)" }
];

export default function UploadScreen({ onAnalyze }) {
  const [contractType, setContractType] = useState("is");
  const [file, setFile] = useState(null);

  function handleSelect(selectedFile) {
    setFile(selectedFile);
    return false; // Dosyayı yükleme; yalnızca seçili dosyayı hatırla.
  }

  return (
    <div className="narrow">
      <Title level={2} className="hero-title">Sözleşmeyi imzalamadan önce riskli maddeleri görün.</Title>
      <Paragraph type="secondary" className="hero-text">
        ContractShield sözleşmeyi maddelere ayırır, her maddeyi Yeşil, Sarı veya Kırmızı olarak
        işaretler ve ilgili kanun maddesine dayanan bir gerekçe gösterir.
      </Paragraph>

      <Card>
        <Form layout="vertical">
          <Form.Item label="Sözleşme türü">
            <Select value={contractType} onChange={setContractType} options={CONTRACT_TYPES} />
          </Form.Item>
        </Form>

        <Upload.Dragger
          accept=".pdf,.docx"
          maxCount={1}
          showUploadList={false}
          beforeUpload={handleSelect}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">{file ? file.name : "PDF veya DOCX dosyasını sürükleyin"}</p>
          <p className="ant-upload-hint">
            {file ? "Başka bir dosya seçmek için tıklayın" : "ya da seçmek için tıklayın"}
          </p>
        </Upload.Dragger>

        {file && (
          <Alert
            type="info"
            className="note"
            message="Bu prototipte analiz motoru bağlı değildir; yüklenen dosya yerine örnek sözleşme gösterilir."
          />
        )}

        <div className="actions">
          <Button type="primary" onClick={() => onAnalyze(file, contractType)}>
            {file ? "Analiz et" : "Örnek sözleşmeyle dene"}
          </Button>
        </div>
      </Card>

      <Row gutter={[12, 12]} className="legend">
        {["yesil", "sari", "kirmizi"].map((key) => (
          <Col xs={24} sm={8} key={key}>
            <Card size="small">
              <Space align="center">
                <RiskIcon label={key} size={22} />
                <div>
                  <Text strong>{LABELS[key].name}</Text>
                  <br />
                  <Text type="secondary">{LABELS[key].description}</Text>
                </div>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
