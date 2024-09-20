import Comments from "@/components/comment";
import FormComment from "@/components/form-comments";

const BlogDetailPage = () =>{
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold">Post one</h1>
            <p>Written by: john doe</p>
            <div className="mt-4 ">lorem ipsum</div>
            <Comments />
            <FormComment/>
        </div>
    )
}

export default BlogDetailPage;