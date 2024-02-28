'use client'
import React from 'react';

const CreateTaxDefinitionErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            {error.message} - error !
        </div>
    );
};

export default CreateTaxDefinitionErrorBoundary;