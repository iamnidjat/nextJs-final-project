'use client'
import React from 'react';

const CreateSalaryDefinitionErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            {error.message} - error !
        </div>
    );
};

export default CreateSalaryDefinitionErrorBoundary;