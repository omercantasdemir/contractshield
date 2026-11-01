// Risk etiketinin görsel gösterimi: renkli etiket (Tag), renkli ikon ve tema renkleri.
// Renk tek başına anlam taşımaz; her etikette ikon ve metin de bulunur.

import { Tag, theme } from "antd";
import { CheckCircleFilled, ExclamationCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { LABELS } from "../labels.js";

const ICONS = {
  yesil: CheckCircleFilled,
  sari: ExclamationCircleFilled,
  kirmizi: CloseCircleFilled
};

// Etiket anahtarından tema rengine eşleme (ör. madde kenarlığı, istatistik değeri için).
export function useLabelColors() {
  const { token } = theme.useToken();
  return { yesil: token.colorSuccess, sari: token.colorWarning, kirmizi: token.colorError };
}

export function RiskIcon({ label, size = 20 }) {
  const colors = useLabelColors();
  const Icon = ICONS[label];
  return <Icon style={{ color: colors[label], fontSize: size }} />;
}

export default function RiskTag({ label }) {
  const Icon = ICONS[label];
  return (
    <Tag color={LABELS[label].status} icon={<Icon />}>
      {LABELS[label].name}
    </Tag>
  );
}
