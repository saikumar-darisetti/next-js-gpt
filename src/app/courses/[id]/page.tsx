async function fetchCourse(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch course details");
    }
    return res.json();
}
export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = await fetchCourse(id);
    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
        </div>
    );
}