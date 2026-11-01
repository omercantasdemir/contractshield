// Seçili maddenin detayı: etiket, güven skoru, dayanak mevzuat ve gerekçe.
// ClauseDetail içeriği üretir; DetailPanel onu kart içinde gösterir (geniş ekran).

import { Card, Alert, Progress, Typography, Space, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { LABELS } from "../labels.js";

const { Text, Paragraph } = Typography;

const NO_ISSUE_TEXT = "Bu maddede kanuna aykırılık veya belirgin bir risk tespit edilmemiştir.";

export function ClauseDetail({ clause }) {
  const label = LABELS[clause.label];
  const confidencePct = Math.round(clause.confidence * 100);

  return (
    <Space direction="vertical" size="middle" className="full-width">
      <Alert type={label.status} showIcon message={label.name} description={label.description} />

      <div>
        <Text type="secondary" className="section-label">Güven</Text>
        <Progress percent={confidencePct} size="small" />
      </div>

      {clause.legal_basis && (
        <div>
          <Text type="secondary" className="section-label">Dayanak mevzuat</Text>
          <Text strong className="basis">{clause.legal_basis}</Text>
        </div>
      )}

      <div>
        <Text type="secondary" className="section-label">Gerekçe</Text>
        <Paragraph className="no-margin">{clause.rationale || NO_ISSUE_TEXT}</Paragraph>
      </div>

      <div>
        <Text type="secondary" className="section-label">Madde metni</Text>
        <Paragraph className="quote">{clause.text}</Paragraph>
      </div>

      <Text type="secondary" className="sample-tag">
        Temsili çıktı · hukuk ekibi doğrulaması bekleniyor
      </Text>
    </Space>
  );
}

export default function DetailPanel({ clause, onClose }) {
  if (!clause) {
    return (
      <Card>
        <Paragraph>Gerekçeyi görmek için bir maddeye tıklayın.</Paragraph>
        <Paragraph type="secondary" className="no-margin">
          Sarı ve Kırmızı maddelerde ilgili kanun maddesi ve kısa bir açıklama gösterilir.
        </Paragraph>
      </Card>
    );
  }

  return (
    <Card
      size="small"
      title={`Madde ${clause.clause_id} · ${clause.title}`}
      extra={<Button type="text" size="small" icon={<CloseOutlined />} onClick={onClose} aria-label="Kapat" />}
    >
      <ClauseDetail clause={clause} />
    </Card>
  );
}
