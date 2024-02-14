import { Case } from "../../models/Case";

export const fetchCases = async (): Promise<Case[]> => {
    const response = await fetch('http://localhost:7007/api/testback/pega-cases');
    const data = await response.json();
    console.log('entre al fetch+++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    return data.cases;
}

export const fetchResultCount = async (): Promise<number> => {
    const response = await fetch('http://localhost:7007/api/testback/pega-cases');
    const data = await response.json();
    console.log('Retrieved result count:', data.resultCount);
    return data.resultCount;
}

export const fetchCompliance = async (): Promise<number> => {
    const response = await fetch('http://localhost:7007/api/testback/pega-compliance');
    const data = await response.json();
    console.log('Retrieved compliance:', data.compliance);
    return data.compliance;
}