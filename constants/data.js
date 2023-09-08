export const TableHeaders = ['ID', 'Type', 'Rent', 'Width (ft)', 'Length (ft)', 'Market Rent', 'Status', 'SQFT/SQM']

export const TableData = [
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],
    ['E22', 'Indoor', '$160', '10', '20', '', 'Rented', '50'],


];

export const Form1InitialValues = {
    propertyName: '',
    line: '',
    country: '',
    city: '',
    postalCode: '',
    closeDate: '',
}

export const Form3InitialValues = {
    lender: [''],
    loanAmount: null,
    startDate: '',
    rateType: 'Fixed',
    interestRate: null,
    capitalization: 'Monthly',
    interestOnlyPeriod: null,
    term: null,
    amortization: null,
    fees: null
}

export const Steps = [
    { name: 'Property detail', status: 'current' },
    { name: 'Unit Mix', status: 'upcoming' },
    { name: 'Financing', status: 'upcoming' },
    { name: 'Income & Expenses', status: 'upcoming' },
]

export const Tabs = [
    {
        name: "Dept 1",
        id: 1
    },
    {
        name: "Add dept",
        id: 2
    }
]