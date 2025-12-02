import CommentList from "@/components/CommentList";

export default function CommentsPage() {
    const initialComments = [
        { id:1, text:"första kommentaren!" },
        { id:2, text:"andra kommentaren!" },
        { id:3, text:"tredje kommentaren!" },
    ];
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Kommentarer</h1>
            <CommentList initialComments={initialComments}/>
        </div>
    );
}