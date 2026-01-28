export const consignments = [
  {
    id: "NSW-2026-001",
    trader: "ABC Electronics Ltd",
    origin: "CN",
    hsCode: "8517",
    declaredValue: 12000,
    benchmarkValue: 21000,
    revenueRisk: 78,
    societyRisk: 64,
    integrityRisk: 22,
    drivers: [
      "Declared value 43% below historical median",
      "HS description mismatch detected",
      "High-risk route indicator"
    ],
    recommendedActions: [
      "Raise valuation query",
      "Non-intrusive inspection",
      "Supervisor review on override"
    ]
  },
  {
    id: "NSW-2026-002",
    trader: "GreenMed Imports",
    origin: "IN",
    hsCode: "3004",
    declaredValue: 45000,
    benchmarkValue: 46000,
    revenueRisk: 12,
    societyRisk: 81,
    integrityRisk: 18,
    drivers: [
      "Controlled pharmaceutical keyword detected",
      "Permit expiry mismatch"
    ],
    recommendedActions: [
      "Hold consignment",
      "Request updated permit"
    ]
  }
];
