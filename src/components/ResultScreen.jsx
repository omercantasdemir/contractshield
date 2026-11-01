// Sonuç ekranı: risk özeti, filtreler, madde listesi ve seçili maddenin detay paneli.
// Geniş ekranda detay sağ sütunda, dar ekranda alttan açılan bir çekmecede (Drawer) gösterilir.

import { useState, useMemo } from "react";
import { Row, Col, Card, Segmented, List, Typography, Button, Space, Grid, Drawer } from "antd";
import { LABELS, LABEL_ORDER } from "../labels.js";
import RiskTag, { RiskIcon, useLabelColors } from "./RiskTag.jsx";
import DetailPanel, { ClauseDetail } from "./DetailPanel.jsx";

const { Title, Text } = Typography;

export default function ResultScreen({ contract, onReset }) {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const screens = Grid.useBreakpoint();
  const isWide = screens.lg !== false;

  const counts = useMemo(() => {
    const result = { yesil: 0, sari: 0, kirmizi: 0 };
    contract.clauses.forEach((c) => result[c.label]++);
    return result;
  }, [contract]);

  const visibleClauses = contract.clauses.filter((c) => {
    if (filter === "all") return true;
    if (filter === "risky") return c.label !== "yesil";
    return c.label === filter;
  });

  const selectedClause = contract.clauses.find((c) => c.clause_id === selectedId) || null;

  return (
    <>
      <div className="result-head">
        <div>
          <Text type="secondary" className="eyebrow">Analiz sonucu</Text>
          <Title level={3} className="result-title">{contract.title}</Title>
          <Text type="secondary">{contract.parties}</Text>
        </div>
        <Button onClick={onReset}>Yeni sözleşme</Button>
      </div>

      <SummaryBar
        counts={counts}
        total={contract.clauses.length}
        filter={filter}
        onFilter={setFilter}
      />

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={15}>
          <Card size="small" styles={{ body: { padding: 8 } }}>
            <ClauseList clauses={visibleClauses} selectedId={selectedId} onSelect={setSelectedId} />
          </Card>
        </Col>

        {isWide && (
          <Col lg={9}>
            <div className="sticky">
              <DetailPanel clause={selectedClause} onClose={() => setSelectedId(null)} />
            </div>
          </Col>
        )}
      </Row>

      {!isWide && (
        <Drawer
          open={selectedClause !== null}
          onClose={() => setSelectedId(null)}
          placement="bottom"
          height="80%"
          title={selectedClause && `Madde ${selectedClause.clause_id} · ${selectedClause.title}`}
        >
          {selectedClause && <ClauseDetail clause={selectedClause} />}
        </Drawer>
      )}
    </>
  );
}

function SummaryBar({ counts, total, filter, onFilter }) {
  const colors = useLabelColors();

  const options = [
    { value: "all", label: <>Tümü <b>{total}</b></> },
    ...LABEL_ORDER.map((key) => ({
      value: key,
      label: (
        <Space size={6}>
          <RiskIcon label={key} size={14} />
          <span>{LABELS[key].name} <b>{counts[key]}</b></span>
        </Space>
      )
    })),
    { value: "risky", label: "Yalnızca riskliler" }
  ];

  return (
    <Card size="small" className="summary">
      <div className="bar" aria-hidden="true">
        {LABEL_ORDER.map((key) =>
          counts[key] > 0 && (
            <span key={key} style={{ flex: counts[key], background: colors[key] }}></span>
          )
        )}
      </div>
      <div className="filter">
        <Segmented options={options} value={filter} onChange={onFilter} />
      </div>
    </Card>
  );
}

function ClauseList({ clauses, selectedId, onSelect }) {
  const colors = useLabelColors();

  return (
    <List
      split={false}
      dataSource={clauses}
      locale={{ emptyText: "Bu filtrede madde yok." }}
      renderItem={(c) => (
        <List.Item
          key={c.clause_id}
          className={"clause clause-" + c.label + (c.clause_id === selectedId ? " selected" : "")}
          style={{ borderLeft: `4px solid ${colors[c.label]}` }}
          onClick={() => onSelect(c.clause_id)}
        >
          <List.Item.Meta
            title={
              <Space wrap size={8}>
                <Text type="secondary" className="clause-no">Madde {c.clause_id}</Text>
                <Text strong>{c.title}</Text>
                <RiskTag label={c.label} />
              </Space>
            }
            description={<span className="clause-text">{c.text}</span>}
          />
        </List.Item>
      )}
    />
  );
}
