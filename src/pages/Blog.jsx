import { PageContainer } from "../components/ui/primitives/PageContainer";
import { useBlogFilters } from "../hooks/useBlogFilters";
import BlogFeed from "../components/blog/sections/BlogFeed";
import BlogSidebar from "../components/blog/sections/BlogSidebar";
import BlogHeader from "../components/blog/sections/BlogHeader";
import { useState, useEffect } from "react";
import { SoftCard } from "../components/ui/cards/SoftCard";
import { getBlogPosts } from "../services/blog.services";



export default function Blog() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogPosts().then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    const blog = useBlogFilters(items);

    return (
        <PageContainer className="flex flex-col gap-6">

            <BlogHeader blog={blog} />

            <div className="grid gap-6 xl:grid-cols-[2fr_1fr] items-start">
                <BlogFeed blog={blog} />
                <BlogSidebar blog={blog} />
            </div>


        </PageContainer>
    );
}