export default function CourseCard({ id, title }: { id: number, title: string }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
            <h2>{title}</h2>
            <p>Course {id}</p>
        </div>
    );
}