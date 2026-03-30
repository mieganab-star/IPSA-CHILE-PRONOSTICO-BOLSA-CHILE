import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface KPIData {
    ipsaValue: number;
    copperDelta: number;
    globalFactor: number;
    varRisk: number;
}

const Dashboard: React.FC = () => {
    const [kpiData, setKpiData] = useState<KPIData>({
        ipsaValue: 4847,
        copperDelta: 20.0,
        globalFactor: 5.0,
        varRisk: -8.2,
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/dashboard');
            setKpiData(response.data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    return (
        <div className="dashboard">
            <h1>IPSA-Cobre Dashboard</h1>
            <div className="kpi-grid">
                <div className="kpi-card">
                    <div className="kpi-label">Projected IPSA</div>
                    <div className="kpi-value">{kpiData.ipsaValue}</div>
                    <div className="kpi-delta positive">+15.4%</div>
                </div>
                <div className="kpi-card">
                    <div className="kpi-label">Δ Copper</div>
                    <div className="kpi-value">+{kpiData.copperDelta.toFixed(1)}%</div>
                    <div className="badge">LME Live</div>
                </div>
                <div className="kpi-card">
                    <div className="kpi-label">Global Factor</div>
                    <div className="kpi-value">+{kpiData.globalFactor.toFixed(1)}%</div>
                    <div className="kpi-sub">GFCI Composite</div>
                </div>
                <div className="kpi-card">
                    <div className="kpi-label">VaR (95%)</div>
                    <div className="kpi-value negative">{kpiData.varRisk.toFixed(1)}%</div>
                    <div className="kpi-sub">Monte Carlo</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;