import Card from "@/components/ui/Card";

export default function CourseCard({ id, title }: { id: number, title: string }) {
    return (
        <Card>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">Course {id}</p>
        </Card>
    );
}