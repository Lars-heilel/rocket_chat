import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function rtkErrorParser(error: FetchBaseQueryError | SerializedError | undefined): string {
    if (!error) {
        return '';
    }
    if ('status' in error) {
        const errorData = error.data;
        if (
            typeof errorData === 'object' &&
            errorData !== null &&
            'message' in errorData &&
            typeof errorData.message === 'string'
        ) {
            return errorData.message;
        }
        return `${error.status}`;
    } else {
        return error.message ?? 'unknown server error';
    }
}
export { rtkErrorParser };
