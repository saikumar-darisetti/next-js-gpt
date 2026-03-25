import Link from "next/link";
import CourseCard from "@/components/CourseCard";

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    images: string[];
    category: string;
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    minimumOrderQuantity: number;
    returnPolicy: string;
    shippingInformation: string;
    warrantyInformation: string;
    reviews: Review[];
    meta: Meta;
    availabilityStatus: string;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

async function fetchCourses() {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }
    const data = await res.json();
    return data.products.slice(0, 5);
}

export default async function CoursesPage() {
    const courses: Course[] = await fetchCourses();

    if (!courses?.length) {
        return <p>No courses found</p>
    }

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course: Course) => (
                    <li key={course.id} className="course-item">
                        <Link href={`/courses/${course.id}`} className="course-link">
                            <CourseCard id={course.id} title={course.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}