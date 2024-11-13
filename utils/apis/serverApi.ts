import { HOST_API, endpoints } from "@/config/site";

// ADMIN: //! Blogs
export async function getBlogs(filter: any) {
  const { page, page_size } = filter;

  try {
    let url =
      HOST_API +
      endpoints.admin.blog.getAll +
      `?page=${Number(page) - 1}${page_size && `&page_size=${page_size}`}`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    console.log("================= url blogs ===================");
    console.log(url);
    console.log("====================================");

    if (!res.ok) {
      return res;
    }

    const result = await res.json();

    console.log("================= res blogs ===================");
    console.log(result);
    console.log("====================================");

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostDetail(id: string, baseUrl: string) {
  try {
    // let url = HOST_API + endpoints.positions.detail + `/${id}`;
    let url = baseUrl + `/${id}`;

    const res = await fetch(url, {
      cache: "no-cache",
    });

    if (!res.ok) {
      return res;
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}
