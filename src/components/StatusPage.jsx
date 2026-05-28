import React from 'react';

const StatusPage = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold">Service Status</h1>
            </header>
            <section className="mb-4">
                <h2 className="text-xl">Current Service Status</h2>
                <div className="status-indicators">
                    {/* Status indicators will go here */}
                </div>
            </section>
            <section>
                <h2 className="text-xl">Incident History</h2>
                <div className="incident-history">
                    {/* Incident history will go here */}
                </div>
            </section>
        </div>
    );
};

export default StatusPage;