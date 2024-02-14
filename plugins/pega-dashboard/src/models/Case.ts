export interface Case {
    caseID: string;
    operator: string;
    createdAt: number;
    status: 'pending' | 'delivered' | 'refunded';
  }