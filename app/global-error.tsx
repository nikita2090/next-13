'use client';

export default function GlobalError({
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong with app!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
