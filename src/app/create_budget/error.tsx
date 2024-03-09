'use client'
import React from 'react';

const CreateBudgetErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            {error.message} - error !
        </div>
    );
};

export default CreateBudgetErrorBoundary;