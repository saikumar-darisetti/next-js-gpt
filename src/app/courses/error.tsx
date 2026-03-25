"use client";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return <div>
        <p>Something went wrong!</p>
        <button onClick={() => reset()}>Try Again</button>
    </div>
}