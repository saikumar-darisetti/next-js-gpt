interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="p-4 rounded-lg shadow-lg border border-gray-200">{children}</div>
    )
}