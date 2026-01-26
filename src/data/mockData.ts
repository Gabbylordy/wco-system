// VARIS Mock Data - Synthetic dataset for hackathon demo

export interface Consignment {
  id: string;
  nswTransactionId: string;
  manifestRef: string;
  portOfEntry: string;
  mode: 'air' | 'sea' | 'land';
  vesselFlight: string;
  eta: string;
  originCountry: string;
  transitPoints: string[];
  importerId: string;
  importerName: string;
  brokerId: string;
  brokerName: string;
  declarationId: string;
  hsCode: string;
  goodsDescription: string;
  declaredValue: number;
  currency: string;
  quantity: number;
  unit: string;
  weight: number;
  paarReference: string;
  riskScores: {
    revenue: number;
    society: number;
    integrity: number;
    overall: number;
  };
  riskDrivers: string[];
  recommendedActions: string[];
  status: 'pending' | 'cleared' | 'held' | 'examining';
  alerts: Alert[];
  auditLog: AuditEntry[];
}

export interface Alert {
  id: string;
  type: 'valuation' | 'classification' | 'illicit' | 'integrity' | 'document';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  indicators: string[];
  timestamp: string;
  acknowledged: boolean;
}

export interface AuditEntry {
  id: string;
  userId: string;
  userName: string;
  role: string;
  action: string;
  objectType: string;
  objectId: string;
  timestamp: string;
  details: string;
  ipAddress: string;
  suspicious: boolean;
}

export interface RiskRule {
  id: string;
  name: string;
  description: string;
  conditions: RuleCondition[];
  actions: string[];
  status: 'draft' | 'approved' | 'active' | 'inactive';
  version: number;
  createdBy: string;
  createdAt: string;
  approvedBy?: string;
  approvedAt?: string;
  hitRate: number;
  falsePositiveRate: number;
}

export interface RuleCondition {
  field: string;
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in_list';
  value: string | number | string[];
}

export interface IntegrityCase {
  id: string;
  userId: string;
  userName: string;
  role: string;
  unit: string;
  riskScore: number;
  anomalies: string[];
  affectedDeclarations: string[];
  timeline: AuditEntry[];
  status: 'open' | 'investigating' | 'escalated' | 'closed';
}

// Mock consignments with planted anomalies
export const mockConsignments: Consignment[] = [
  {
    id: 'CONS-2026-0001',
    nswTransactionId: 'NSW-TRX-78234',
    manifestRef: 'BL-APAPA-2026-1234',
    portOfEntry: 'Apapa Port',
    mode: 'sea',
    vesselFlight: 'MV ATLANTIC VOYAGER',
    eta: '2026-01-28T14:00:00Z',
    originCountry: 'China',
    transitPoints: ['Singapore', 'Port Said'],
    importerId: 'IMP-NG-4521',
    importerName: 'Lagos Electronics Ltd',
    brokerId: 'BRK-NG-0891',
    brokerName: 'Swift Customs Brokers',
    declarationId: 'DEC-2026-45678',
    hsCode: '8471.30',
    goodsDescription: 'Laptop computers, portable',
    declaredValue: 125000,
    currency: 'USD',
    quantity: 500,
    unit: 'units',
    weight: 2500,
    paarReference: 'PAAR-2026-8901',
    riskScores: {
      revenue: 78,
      society: 25,
      integrity: 15,
      overall: 65,
    },
    riskDrivers: [
      'Declared value 42% below market median for HS 8471.30',
      'Multiple PAAR amendments in past 30 days',
      'First-time import of this commodity by trader',
    ],
    recommendedActions: [
      'Request commercial invoice verification',
      'Compare with recent benchmark prices',
      'Physical examination of sample units',
    ],
    status: 'pending',
    alerts: [
      {
        id: 'ALT-001',
        type: 'valuation',
        severity: 'high',
        title: 'Significant Undervaluation Detected',
        description: 'Declared CIF value is 42% below the established price band for laptop computers from China.',
        indicators: ['Price deviation > 40%', 'New commodity for trader', 'Recent PAAR changes'],
        timestamp: '2026-01-26T09:15:00Z',
        acknowledged: false,
      },
    ],
    auditLog: [
      {
        id: 'AUD-001',
        userId: 'USR-0045',
        userName: 'Adebayo Okonkwo',
        role: 'Declaration Officer',
        action: 'CREATE',
        objectType: 'Declaration',
        objectId: 'DEC-2026-45678',
        timestamp: '2026-01-26T08:30:00Z',
        details: 'Initial declaration submission',
        ipAddress: '192.168.1.45',
        suspicious: false,
      },
    ],
  },
  {
    id: 'CONS-2026-0002',
    nswTransactionId: 'NSW-TRX-78235',
    manifestRef: 'AWB-LOS-2026-5678',
    portOfEntry: 'Murtala Muhammed Intl',
    mode: 'air',
    vesselFlight: 'EK 783',
    eta: '2026-01-27T06:30:00Z',
    originCountry: 'Pakistan',
    transitPoints: ['Dubai'],
    importerId: 'IMP-NG-2234',
    importerName: 'MedSupply Nigeria',
    brokerId: 'BRK-NG-0445',
    brokerName: 'Premier Logistics',
    declarationId: 'DEC-2026-45679',
    hsCode: '3004.90',
    goodsDescription: 'Medicaments for therapeutic use',
    declaredValue: 85000,
    currency: 'USD',
    quantity: 10000,
    unit: 'boxes',
    weight: 450,
    paarReference: 'PAAR-2026-8902',
    riskScores: {
      revenue: 35,
      society: 92,
      integrity: 20,
      overall: 82,
    },
    riskDrivers: [
      'Origin country flagged for counterfeit pharmaceuticals',
      'Missing NAFDAC pre-shipment certificate',
      'Routing through known transshipment hub',
      'Generic description lacking active ingredient detail',
    ],
    recommendedActions: [
      'Hold for NAFDAC verification',
      'Request certificate of pharmaceutical registration',
      'Full physical examination with lab sampling',
      'Cross-reference with approved drug importers list',
    ],
    status: 'held',
    alerts: [
      {
        id: 'ALT-002',
        type: 'illicit',
        severity: 'critical',
        title: 'Potential Counterfeit Pharmaceuticals',
        description: 'Multiple indicators suggest possible counterfeit or unregistered medicaments requiring immediate intervention.',
        indicators: ['High-risk origin', 'Missing regulatory docs', 'Transshipment routing', 'Vague description'],
        timestamp: '2026-01-26T10:45:00Z',
        acknowledged: false,
      },
    ],
    auditLog: [],
  },
  {
    id: 'CONS-2026-0003',
    nswTransactionId: 'NSW-TRX-78236',
    manifestRef: 'BL-TINCAN-2026-9012',
    portOfEntry: 'Tin Can Island',
    mode: 'sea',
    vesselFlight: 'MSC FORTUNA',
    eta: '2026-01-29T08:00:00Z',
    originCountry: 'Turkey',
    transitPoints: [],
    importerId: 'IMP-NG-1122',
    importerName: 'Textile Masters Int\'l',
    brokerId: 'BRK-NG-0667',
    brokerName: 'Gateway Customs Services',
    declarationId: 'DEC-2026-45680',
    hsCode: '6203.42',
    goodsDescription: 'Men\'s trousers of cotton',
    declaredValue: 45000,
    currency: 'USD',
    quantity: 15000,
    unit: 'pieces',
    weight: 3000,
    paarReference: 'PAAR-2026-8903',
    riskScores: {
      revenue: 15,
      society: 10,
      integrity: 85,
      overall: 45,
    },
    riskDrivers: [
      'Declaration edited 4 times by same officer in 2 hours',
      'HS code changed after initial risk assessment',
      'Override of selectivity channel after system flagged',
    ],
    recommendedActions: [
      'Review edit history timeline',
      'Verify officer authorization for changes',
      'Escalate to supervisor for review',
    ],
    status: 'examining',
    alerts: [
      {
        id: 'ALT-003',
        type: 'integrity',
        severity: 'high',
        title: 'Unusual Officer Activity Pattern',
        description: 'Multiple rapid edits and system override by single officer warrant integrity review.',
        indicators: ['Multiple edits', 'Channel override', 'Short timeframe'],
        timestamp: '2026-01-26T11:20:00Z',
        acknowledged: false,
      },
    ],
    auditLog: [
      {
        id: 'AUD-002',
        userId: 'USR-0089',
        userName: 'Ibrahim Musa',
        role: 'Examining Officer',
        action: 'EDIT',
        objectType: 'Declaration',
        objectId: 'DEC-2026-45680',
        timestamp: '2026-01-26T10:15:00Z',
        details: 'Changed HS code from 6203.43 to 6203.42',
        ipAddress: '192.168.2.89',
        suspicious: true,
      },
      {
        id: 'AUD-003',
        userId: 'USR-0089',
        userName: 'Ibrahim Musa',
        role: 'Examining Officer',
        action: 'OVERRIDE',
        objectType: 'RiskChannel',
        objectId: 'DEC-2026-45680',
        timestamp: '2026-01-26T10:45:00Z',
        details: 'Override selectivity from RED to YELLOW',
        ipAddress: '192.168.2.89',
        suspicious: true,
      },
    ],
  },
  {
    id: 'CONS-2026-0004',
    nswTransactionId: 'NSW-TRX-78237',
    manifestRef: 'BL-APAPA-2026-3456',
    portOfEntry: 'Apapa Port',
    mode: 'sea',
    vesselFlight: 'MAERSK SEATTLE',
    eta: '2026-01-27T16:00:00Z',
    originCountry: 'Germany',
    transitPoints: [],
    importerId: 'IMP-NG-0055',
    importerName: 'AutoParts Nigeria Plc',
    brokerId: 'BRK-NG-0112',
    brokerName: 'Continental Shipping',
    declarationId: 'DEC-2026-45681',
    hsCode: '8708.29',
    goodsDescription: 'Motor vehicle parts and accessories',
    declaredValue: 320000,
    currency: 'USD',
    quantity: 2500,
    unit: 'pieces',
    weight: 8500,
    paarReference: 'PAAR-2026-8904',
    riskScores: {
      revenue: 12,
      society: 8,
      integrity: 5,
      overall: 10,
    },
    riskDrivers: [],
    recommendedActions: ['Standard documentary check'],
    status: 'cleared',
    alerts: [],
    auditLog: [],
  },
  {
    id: 'CONS-2026-0005',
    nswTransactionId: 'NSW-TRX-78238',
    manifestRef: 'AWB-KAN-2026-7890',
    portOfEntry: 'Mallam Aminu Kano Intl',
    mode: 'air',
    vesselFlight: 'TK 625',
    eta: '2026-01-28T03:15:00Z',
    originCountry: 'UAE',
    transitPoints: ['Istanbul'],
    importerId: 'IMP-NG-3344',
    importerName: 'Northern Gold Traders',
    brokerId: 'BRK-NG-0778',
    brokerName: 'Sahel Express Customs',
    declarationId: 'DEC-2026-45682',
    hsCode: '7113.19',
    goodsDescription: 'Articles of jewelry, precious metal',
    declaredValue: 180000,
    currency: 'USD',
    quantity: 200,
    unit: 'pieces',
    weight: 15,
    paarReference: 'PAAR-2026-8905',
    riskScores: {
      revenue: 68,
      society: 55,
      integrity: 30,
      overall: 58,
    },
    riskDrivers: [
      'High-value low-weight profile typical of money laundering',
      'New trader with limited import history',
      'Declared weight inconsistent with quantity',
    ],
    recommendedActions: [
      'Verify gold purity certificates',
      'Cross-check with precious metals registry',
      'Physical examination and weighing',
    ],
    status: 'pending',
    alerts: [
      {
        id: 'ALT-004',
        type: 'valuation',
        severity: 'medium',
        title: 'High-Value Low-Weight Anomaly',
        description: 'Profile characteristics warrant enhanced scrutiny for potential trade-based money laundering.',
        indicators: ['Value/weight ratio', 'New trader', 'Weight discrepancy'],
        timestamp: '2026-01-26T12:00:00Z',
        acknowledged: false,
      },
    ],
    auditLog: [],
  },
];

// Mock risk rules
export const mockRiskRules: RiskRule[] = [
  {
    id: 'RULE-001',
    name: 'Undervaluation - Electronics from Asia',
    description: 'Flag electronics imports from Asian origins with declared values significantly below benchmark',
    conditions: [
      { field: 'hsCode', operator: 'in_list', value: ['8471', '8517', '8528'] },
      { field: 'originCountry', operator: 'in_list', value: ['China', 'Hong Kong', 'Vietnam'] },
      { field: 'valueDeviation', operator: 'greater_than', value: 30 },
    ],
    actions: ['Assign RED channel', 'Require valuation review', 'Generate price comparison report'],
    status: 'active',
    version: 3,
    createdBy: 'Risk Management Unit',
    createdAt: '2025-11-15T09:00:00Z',
    approvedBy: 'Chief Risk Officer',
    approvedAt: '2025-11-18T14:30:00Z',
    hitRate: 12.5,
    falsePositiveRate: 18.2,
  },
  {
    id: 'RULE-002',
    name: 'Counterfeit Pharma Indicators',
    description: 'Enhanced screening for pharmaceutical shipments from high-risk origins without proper documentation',
    conditions: [
      { field: 'hsCode', operator: 'in_list', value: ['3003', '3004'] },
      { field: 'originCountry', operator: 'in_list', value: ['India', 'Pakistan', 'Bangladesh'] },
      { field: 'nafdacCert', operator: 'equals', value: 'missing' },
    ],
    actions: ['Assign RED channel', 'Mandatory hold', 'Alert NAFDAC liaison', 'Lab sampling required'],
    status: 'active',
    version: 2,
    createdBy: 'Health & Safety Unit',
    createdAt: '2025-10-22T11:00:00Z',
    approvedBy: 'Deputy Comptroller',
    approvedAt: '2025-10-25T16:00:00Z',
    hitRate: 8.3,
    falsePositiveRate: 5.1,
  },
  {
    id: 'RULE-003',
    name: 'Rapid Amendment Pattern',
    description: 'Detect declarations with multiple amendments in short timeframes suggesting data manipulation',
    conditions: [
      { field: 'amendmentCount', operator: 'greater_than', value: 3 },
      { field: 'amendmentTimespan', operator: 'less_than', value: 4 },
      { field: 'fieldChanged', operator: 'in_list', value: ['hsCode', 'value', 'quantity'] },
    ],
    actions: ['Integrity flag', 'Supervisor review required', 'Lock further amendments'],
    status: 'draft',
    version: 1,
    createdBy: 'Integrity Unit',
    createdAt: '2026-01-20T10:00:00Z',
    hitRate: 0,
    falsePositiveRate: 0,
  },
];

// Mock integrity cases
export const mockIntegrityCases: IntegrityCase[] = [
  {
    id: 'INT-2026-001',
    userId: 'USR-0089',
    userName: 'Ibrahim Musa',
    role: 'Examining Officer',
    unit: 'Tin Can Command',
    riskScore: 78,
    anomalies: [
      'Multiple channel overrides (6 in past week)',
      'Odd-hour approvals (23:00-04:00)',
      'Concentrated amendments on high-value shipments',
    ],
    affectedDeclarations: ['DEC-2026-45680', 'DEC-2026-44521', 'DEC-2026-43876'],
    timeline: mockConsignments[2].auditLog,
    status: 'investigating',
  },
  {
    id: 'INT-2026-002',
    userId: 'USR-0156',
    userName: 'Fatima Abubakar',
    role: 'Valuation Officer',
    unit: 'Apapa Command',
    riskScore: 62,
    anomalies: [
      'Repeated PAAR downgrades for same broker',
      'Bulk approvals exceeding daily average by 300%',
    ],
    affectedDeclarations: ['DEC-2026-44001', 'DEC-2026-44002', 'DEC-2026-44003'],
    timeline: [],
    status: 'open',
  },
];

// Dashboard statistics
export const dashboardStats = {
  pendingConsignments: 156,
  highRiskAlerts: 23,
  clearedToday: 412,
  revenueAtRisk: 4250000,
  averageClearanceTime: 2.4,
  integrityFlags: 5,
  activeRules: 47,
  ruleHitRate: 11.2,
};
