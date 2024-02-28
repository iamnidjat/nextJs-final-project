'use client'
import React from 'react';

const CreatePayslipErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            {error.message} - error !
        </div>
    );
};

export default CreatePayslipErrorBoundary;