'use client';

import { useFormStatus } from 'react-dom';

/**
 * @description hook useFormStatus must be placed between <form> and </form> tags
 */
export default function FormSubmit() {
    const status = useFormStatus();

    if (status.pending) {
        return <p>Creating post...</p>
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
}