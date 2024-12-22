import Link from "next/link";
import data from "../data/post.json";
const Blog = () => {
    console.log(data);
    return (
        <>


            {data.map((item, i) => (
                <div   className="col-lg-4 col-sm-4" key={i}>
                    <Link href={`/blog/${item.id}`}>
                        <a>
                            <img className="img-fluid" src={`/images/blog/${item.img}`} alt="" />

                            <h4> {item.title}</h4>
                        </a>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Blog;
